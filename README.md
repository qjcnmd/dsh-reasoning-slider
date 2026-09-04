# dsh-reasoning-slider

**推理等级滑块**，直接内嵌在 DeepSeek Harness 的模型选择器里：点开模型选择器，选中模型后下方出现滑块，拖动即可切换该模型的推理档位（off / minimal / low / medium / high / xhigh / max）。

## 安装

需要 pnpm（`npm i -g pnpm`）与 dsh（`npm i -g @deepseek-ai/dsh`）。

```sh
dsh plugin --profile web add reasoning-slider
```

## 功能

- 滑块内嵌于模型选择器弹层，选择模型后自动显示该模型支持的推理档位
- 拖动滑块实时预览，松开后生效
- 切换模型时自动携带当前档位；目标模型不支持当前档位时自动回退到其默认档位
- 单档位模型显示"支持档位: xxx"，无档位模型显示提示
- 键盘：←/→ 或 ↑/↓ 切换，滚动滚轮也可切换

## 卸载

```sh
dsh plugin --profile web remove reasoning-slider
```

## 兼容性

`reasoning-slider@0.0.6` 支持 DSH `0.1.2-alpha.2`、`0.1.2-alpha.4`、`0.1.2-alpha.5` 与 `0.1.2-rc.1`，要求 Node.js `22.13.0` 或更高版本。DSH `0.1.2-alpha.3` 尚未验证。

一次性 `web` Profile 已在 Windows、Node.js `24.19.0`、DSH `0.1.2-alpha.2` 环境，以及 WSL2 Ubuntu、Node.js `22.23.2`、DSH `0.1.2-alpha.4`、`0.1.2-alpha.5`、`0.1.2-rc.1` 环境完成本地插件安装、配置合成、服务冷启动、认证页面响应及卸载复核。

## 开发

```text
dsh-reasoning-slider/
├── lib/
│   ├── index.js   # Node half（纯 UI 插件，apply 为空）
│   └── client.js  # 浏览器 half（完整滑块 UI）
├── cordis.patch.yml
└── package.json   # dsh.bundle 声明：安装后自动成为 profile 层
```

客户端代码是 `window.__ModuleLoader__.load({...})` 格式的普通 JavaScript，无构建步骤；React 通过 `require("react")` 从 dsh 运行时解析。

## 许可

MIT
