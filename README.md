# CloudStar DIY PC Docs

## 本地运行

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
npm run docs:preview
```

## GitHub Pages 部署

已提供 GitHub Actions 工作流：`.github/workflows/deploy.yml`。

- 默认监听 `main` 分支推送
- 需要在 GitHub 仓库 Settings -> Pages 中选择 **Source: GitHub Actions**
