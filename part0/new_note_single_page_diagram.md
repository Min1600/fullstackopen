    browser->>server: POST  https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {content: "test", date: "2025-08-04T14:50:09.452Z"}
    deactivate serve