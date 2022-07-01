# 中国 PWA 开发者日

分享国内和国际厂商的 PWA 的成功案例，传播有关 PWA 的技术及实践，包括如何成功构建 PWA 以及将 PWA 技术集成到您现有的 Web 应用中。

## How to Run

请配置 .cert 后运行开发环境

```
mkdir -p .cert && mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem 'localhost'
npm run dev
```

```
"build": "tsc && vite build",
"deploy": "npm run build && gh-pages -d dist"
```