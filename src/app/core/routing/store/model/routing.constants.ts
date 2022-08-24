export const USER_REDIRECT_PATH = 'user';
export const DASHBOARD_REDIRECT_PATH = 'dashboard/:id';
export const EMAIL_REDIRECT_PATH = 'email';

export const ERROR_REDIRECT_PATH = 'error';

export const DASHBOBARD_BREADCRUMB = 'Codingame';
export const USER_BREADCRUMB = 'Users';
export const ERROR_BREADCRUMB = 'Erreur';

export const QUESTION_LIST = 'list-domain';

export const DASHBOARD_URI = '/' + DASHBOARD_REDIRECT_PATH;
export const EMAIL_URI = '/' + EMAIL_REDIRECT_PATH;

export const USER_URI = '/' + USER_REDIRECT_PATH;

export const QUESTION_LIST_URI = '/' + QUESTION_LIST;
export const ERROR_URI = '/' + ERROR_REDIRECT_PATH;

//

export const MAP_BREADCRUMB_BY_PATH: Map<string, string> = new Map<string, string>([
  [DASHBOARD_URI, DASHBOBARD_BREADCRUMB],
  [USER_URI, USER_BREADCRUMB],
  [ERROR_URI, ERROR_BREADCRUMB],
]);
