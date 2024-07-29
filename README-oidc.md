OIDC
===

本文档描述了如何在`hoppscotch`中使用 OpenID Connect (OIDC)

## 什么是 OpenID Connect？

OpenID Connect 是一个基于 OAuth 2.0 协议的认证标准。它允许客户端应用程序通过认证服务器验证用户的身份，并获取用户的基本信息。

## 如何配置 OIDC？

### 以Gitlab-CE为例

- 在`.env`中提供配置信息
```shell
# OIDC Auth Config
OIDC_CLIENT_ID="********"
OIDC_CLIENT_SECRET="*********"
OIDC_CALLBACK_URL=https://your-hoppscotch-server/v1/auth/oidc/callback
OIDC_SCOPE="openid,profile,email"
OIDC_ISSUER="https://your-gitlab"
OIDC_AUTH_URL="https://your-gitlab/oauth/authorize"
OIDC_TOKEN_URL="https://your-gitlab/oauth/token"
OIDC_USERINFO_URL="https://your-gitlab/oauth/userinfo"
```

- 获取`OIDC_CLIENT_ID`和`OIDC_CLIENT_SECRET`
1. 在gitlab上登录管理员控制台，点击「应用」，然后点击「创建应用」。

2. 选择「OIDC 应用」，填写应用名称，配置`Redirect URI`为`https://your-hoppscotch-server/v1/auth/oidc/callback`，配置`Scopes`为`openid,profile,email`，点击「创建应用」。

3. 创建成功后，点击「配置」，可以获取到 `Client ID` 和 `Client Secret`。
