export type supportedEnvironments = 'dev' | 'stage' | 'perf' | 'prod'

export interface environmentConfig {
    readonly baseURL: string;
    readonly env: supportedEnvironments;
    readonly headless: boolean;
    readonly slowMo : number;
    readonly defaultTimeoutMs: number;
    readonly navigationTimeoutMs: number;
    readonly browserstack: BrowserStackConfig;
    readonly notifications: NotificationConfig;

}

export interface BrowserStackConfig {
    readonly enabled: boolean;
    readonly user: string;
    readonly key: string;
    readonly buildName: string;
    readonly projectName : string;
}

export interface NotificationConfig {
    readonly slackWebHookURL : string;
    readonly teamsWebHookURL : string;
    readonly notifyOnCompletion: boolean;
    readonly notifyOnFailureOnly: boolean;
}

function requireEnv(key: string, fallback?: string): string {
    const value = process.env[key] ?? fallback;
    if (value == undefined) {
        throw new Error(`[Config] Required Env variable "${key}" is not set`);
    }
    return value;
}

function boolEnv(key: string, defaultValue: boolean): boolean {
    const val = process.env(key);
    if(val == undefined) return defaultValue;
    return val.toLowerCase() == 'true';
}

