export type AppType = 'development' | 'staging' | 'production';

export type Options = {
  app: string,
  owner: string,
  type: AppType,
  user?: string,  // if not provided use the same as owner
  repo?: string,  // if not provided use the same as app
  directory?: string, // if not provided use the same as app
  script?: string, // The script to execute, if not provided use app
  env?: Array<string>,
  maxClones?: number,
}
