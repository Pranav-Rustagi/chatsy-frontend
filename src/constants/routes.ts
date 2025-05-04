const BASE_ROUTE = process.env.NEXT_PUBLIC_CHATSY_BACKEND_BASE_ROUTE;
const AUTH_ROUTE = `${BASE_ROUTE}/api/auth`;

const CHECK_EXISTING_USER_ROUTE = `${AUTH_ROUTE}/check-existing-user`;
const SAVE_NEW_USER_INFO_ROUTE = `${AUTH_ROUTE}/save-new-user-info`;

export {
    CHECK_EXISTING_USER_ROUTE,
    SAVE_NEW_USER_INFO_ROUTE
};