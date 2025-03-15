import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        chrome.storage.sync.get('sessions', (data) => {
            setSessions(data.sessions || []);
        });
    }, []);

    const saveCurrentSession = () => {
        chrome.tabs.query({}, (tabs) => {
            const newSession = {
                name: `Session ${Date.now()}`,
                tabs: tabs.map((tab) => tab.url),
            };

            chrome.storage.sync.get('sessions', (data) => {
                const updatedSessions = [...(data.sessions || []), newSession];
                chrome.storage.sync.set({ sessions: updatedSessions });
                setSessions(updatedSessions);
            });
        });
    };

    return (
        <div>
            <h1>Tab Organizer</h1>
            <button onClick={saveCurrentSession}>Save Current Tabs</button>
            <h2>Saved Sessions</h2>
            <ul>
                {sessions.map((session, index) => (
                    <li key={index}>
                        {session.name} ({session.tabs.length} tabs)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Popup;