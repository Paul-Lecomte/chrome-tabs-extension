"use client"; // Ensures this runs only in the browser

import React, { useState, useEffect } from "react";

const Popup = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (typeof window === "undefined" || !chrome?.storage) return;

        chrome.storage.sync.get("sessions", (data) => {
            setSessions(data.sessions || []);
        });
    }, []);

    return (
        <div>
            <h1>Tab Organizer</h1>
            <p>Save and manage your Chrome sessions</p>
        </div>
    );
};

export default Popup;
