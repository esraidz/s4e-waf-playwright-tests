# Bug Report

## Title
Retry button closes modal but does not reset the input (unclear retry behavior)

## Module
WAF Detection from DNS Records Scanner  
https://s4e.io/tools/waf-detection-from-dns-records

## Environment
- OS: macOS
- Browser: Chromium (Playwright)
- Date: 2026-03-01

## Preconditions
Page is loaded and input field is visible.

## Steps to Reproduce
1. Open the module page.
2. Type an invalid value into the input (e.g., `abc`).
3. Click **SCAN NOW**.
4. Validation modal appears: **"Scan Only One: Domain, Ipv4, Subdomain"**.
5. Click **Retry**.

## Actual Result
- The validation modal closes.
- The input value remains unchanged (`abc` stays in the input).

## Expected Result
One of the following should happen (clearer UX):
- **Option A:** Retry should reset/clear the input so the user can try again from a clean state.
- **Option B:** If Retry is intended to re-try with the same input, the UI should clearly indicate that behavior.

## Impact
Users may not understand what "Retry" does, because it closes the modal but keeps the invalid input unchanged. This can cause confusion and repeated invalid submissions.

## Evidence
- Add screenshot(s) of the modal and the state after pressing Retry (optional but recommended).