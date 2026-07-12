# 部署说明

| 资源 | 值 |
|---|---|
| GitHub | `https://github.com/Nemo-netone/ot-ssmw7150cne` |
| Cloudflare Pages | `ot-ssmw7150cne` |
| 稳定地址 | `https://ot-ssmw7150cne.pages.dev` |
| 生产分支 | `main` |
| 发布目录 | `original-site/` |
| Supabase schema | `ot_ssmw7150cne` |

## 验证

- 首页与后台 HTTP 200
- `/health` 返回正确 service/schema
- 文档中的公开演示账号登录通过
- 活动列表返回种子数据
- 临时 CRUD 完成并清理
- 桌面与移动浏览器无 localhost 资源请求