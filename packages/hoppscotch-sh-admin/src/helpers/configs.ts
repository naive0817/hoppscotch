import { InfraConfigEnum } from './backend/graphql';

export type SsoAuthProviders = 'google' | 'microsoft' | 'github' | 'oidc';

export type ServerConfigs = {
  providers: {
    google: {
      name: SsoAuthProviders;
      enabled: boolean;
      fields: {
        client_id: string;
        client_secret: string;
        callback_url: string;
        scope: string;
      };
    };
    github: {
      name: SsoAuthProviders;
      enabled: boolean;
      fields: {
        client_id: string;
        client_secret: string;
        callback_url: string;
        scope: string;
      };
    };
    microsoft: {
      name: SsoAuthProviders;
      enabled: boolean;
      fields: {
        client_id: string;
        client_secret: string;
        callback_url: string;
        scope: string;
        tenant: string;
      };
    };
    oidc: {
      name: SsoAuthProviders;
      enabled: boolean;
      fields: {
        callback_url: string;
        client_id: string;
        client_secret: string;
        scope: string;
      };
    };
  };

  mailConfigs: {
    name: string;
    enabled: boolean;
    fields: {
      email_auth: boolean;
      mailer_smtp_url: string;
      mailer_from_address: string;
      mailer_smtp_host: string;
      mailer_smtp_port: string;
      mailer_smtp_user: string;
      mailer_smtp_password: string;
      mailer_smtp_secure: boolean;
      mailer_tls_reject_unauthorized: boolean;
      mailer_use_custom_configs: boolean;
    };
  };

  dataSharingConfigs: {
    name: string;
    enabled: boolean;
  };
};

export type UpdatedConfigs = {
  name: InfraConfigEnum;
  value: string;
};

export type ConfigTransform = {
  config: Config[];
  enabled?: boolean;
  fields?: Record<string, string | boolean> | string;
};

export type ConfigSection = {
  name: SsoAuthProviders | string;
  enabled: boolean;
  fields: Record<string, string | boolean>;
};

export type Config = {
  name: InfraConfigEnum;
  key: string;
};

export const GOOGLE_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.GoogleClientId,
    key: 'client_id',
  },
  {
    name: InfraConfigEnum.GoogleClientSecret,
    key: 'client_secret',
  },
  {
    name: InfraConfigEnum.GoogleCallbackUrl,
    key: 'callback_url',
  },
  {
    name: InfraConfigEnum.GoogleScope,
    key: 'scope',
  },
];

export const MICROSOFT_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.MicrosoftClientId,
    key: 'client_id',
  },
  {
    name: InfraConfigEnum.MicrosoftClientSecret,
    key: 'client_secret',
  },
  {
    name: InfraConfigEnum.MicrosoftCallbackUrl,
    key: 'callback_url',
  },
  {
    name: InfraConfigEnum.MicrosoftScope,
    key: 'scope',
  },
  {
    name: InfraConfigEnum.MicrosoftTenant,
    key: 'tenant',
  },
];

export const GITHUB_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.GithubClientId,
    key: 'client_id',
  },
  {
    name: InfraConfigEnum.GithubClientSecret,
    key: 'client_secret',
  },
  {
    name: InfraConfigEnum.GithubCallbackUrl,
    key: 'callback_url',
  },
  {
    name: InfraConfigEnum.GithubScope,
    key: 'scope',
  },
];

export const OIDC_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.OidcCallbackUrl,
    key: 'callback_url',
  },
  {
    name: InfraConfigEnum.OidcClientId,
    key: 'client_id',
  },
  {
    name: InfraConfigEnum.OidcClientSecret,
    key: 'client_secret',
  },
  {
    name: InfraConfigEnum.OidcScope,
    key: 'scope',
  },
];


export const MAIL_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.MailerSmtpUrl,
    key: 'mailer_smtp_url',
  },
  {
    name: InfraConfigEnum.MailerAddressFrom,
    key: 'mailer_from_address',
  },
  {
    name: InfraConfigEnum.MailerSmtpEnable,
    key: 'mailer_smtp_enabled',
  },
  {
    name: InfraConfigEnum.MailerUseCustomConfigs,
    key: 'mailer_use_custom_configs',
  },
];

export const CUSTOM_MAIL_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.MailerSmtpHost,
    key: 'mailer_smtp_host',
  },
  {
    name: InfraConfigEnum.MailerSmtpPort,
    key: 'mailer_smtp_port',
  },
  {
    name: InfraConfigEnum.MailerSmtpUser,
    key: 'mailer_smtp_user',
  },
  {
    name: InfraConfigEnum.MailerSmtpPassword,
    key: 'mailer_smtp_password',
  },
  {
    name: InfraConfigEnum.MailerSmtpSecure,
    key: 'mailer_smtp_secure',
  },
  {
    name: InfraConfigEnum.MailerTlsRejectUnauthorized,
    key: 'mailer_tls_reject_unauthorized',
  },
];

const DATA_SHARING_CONFIGS: Omit<Config, 'key'>[] = [
  {
    name: InfraConfigEnum.AllowAnalyticsCollection,
  },
];

export const ALL_CONFIGS = [
  GOOGLE_CONFIGS,
  MICROSOFT_CONFIGS,
  GITHUB_CONFIGS,
  OIDC_CONFIGS,
  MAIL_CONFIGS,
  CUSTOM_MAIL_CONFIGS,
  DATA_SHARING_CONFIGS,
];
