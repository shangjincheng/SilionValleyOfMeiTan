export enum EnvUtil{
    PROD = 'prod',
    TEST = 'test'
}

// @ts-ignore
export const isLocal = window?.location.hostname?.includes('localhost');