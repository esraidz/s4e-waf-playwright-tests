# Module
Web Application Firewall (WAF) Detection from DNS Records Scanner  
URL: https://s4e.io/tools/waf-detection-from-dns-records

# Test Cases (Edge-case focused)

| ID | Scenario | Test Data | Steps | Expected Result |
|---|---|---|---|---|
| TC-01 | Page opens and main elements are visible | - | Open page | Input field and "SCAN NOW" button are visible |
| TC-02 | Empty input submission | "" | Click SCAN NOW | Validation modal or error shown; scan should not start |
| TC-03 | Whitespace-only input | "   " | Type spaces, click SCAN NOW | Validation modal/error shown |
| TC-04 | Invalid short string | "abc" | Type abc, click SCAN NOW | Validation modal appears |
| TC-05 | Valid domain (example: s4e.io) | "s4e.io" | Type s4e.io, click SCAN NOW | Scan should start OR a clear validation message shown |
| TC-06 | Valid IPv4 | "8.8.8.8" | Type IP, click SCAN NOW | Scan should start OR a clear validation message shown |
| TC-07 | Invalid IPv4 | "999.1.1.1" | Type invalid IP, click SCAN NOW | Validation modal appears |
| TC-08 | Domain with protocol | "https://s4e.io" | Type, click SCAN NOW | Should either normalize/accept or show clear validation |
| TC-09 | Special characters | "!@#$" | Type, click SCAN NOW | Validation modal appears |
| TC-10 | Modal close behavior | "abc" | Trigger modal, click X | Modal closes, user returns to page |
| TC-11 | Retry button behavior | "abc" | Trigger modal, click Retry | Modal closes and retry action occurs (observe whether input clears or scan retriggers) |
| TC-12 | Double submit | "abc" | Double click SCAN NOW | Should not create multiple modals / should handle gracefully |