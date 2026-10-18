# dsh-reasoning-slider

**推理等级滑块**，直接内嵌在 DeepSeek Harness 的模型选择器里：点开模型选择器，选中模型后下方出现滑块，拖动即可切换该模型的推理档位（off / minimal / low / medium / high / xhigh / max）。

## 安装

需要 pnpm（`npm i -g pnpm`）与 dsh（`npm i -g @deepseek-ai/dsh`）。

```sh
dsh plugin --profile web add reasoning-slider
```

## 功能

- 滑块内嵌于模型选择器弹层，选择模型后自动显示该模型支持的推理档位
- 弹层使用随亮色／暗色主题变化的不透明背景，供应商分组标题随列表正常滚动
- 胶囊形轨道与圆形手柄，各推理档位的标记点大小一致；最高档使用紫色渐变、细小闪点和淡色标记
- 拖动滑块实时预览，松开后生效
- 切换模型时自动携带当前档位；目标模型不支持当前档位时自动回退到其默认档位
- 单档位模型显示"支持档位: xxx"，无档位模型显示提示
- 键盘：←/→ 或 ↑/↓ 切换，滚动滚轮也可切换

## 卸载

```sh
dsh plugin --profile web remove reasoning-slider
```

## 兼容性

`reasoning-slider@0.0.7` 适用于 DSH 的 **Web 端**，要求 Node.js `22.13.0` 或更高版本，同时需满足所用 DSH 版本的运行要求。插件通过 DSH 的模型目录和模型选择接口读取、切换推理档位；可选档位由供应商和模型的能力声明决定。

截至 **2026-10-18**，已在 Windows、Node.js `24.19.0`、独立 `web` Profile 中完成以下版本的网页实测：

| DSH 版本 | 版本渠道 | 结果 |
| --- | --- | --- |
| `0.1.7-alpha.2` | 0.1 系列 | 通过 |
| `0.2.0-rc.2` | npm `latest` | 通过 |
| `0.2.1-rc.2` | npm `next` | 通过 |

验证覆盖插件安装和加载、模型选择、推理档位调整及后端保存，并通过本地模拟模型确认实际请求携带所选推理档位、网页收到回复；另检查了拖动、键盘操作、切换模型时保留受支持档位或回退默认档位、单档位与无推理模型、刷新后恢复选择。

表中版本是实测记录，不是安装白名单。其他 DSH 版本只要保留上述 Web 插件接口，也可使用；DSH 更新后可打开模型选择器、调整档位并刷新页面，确认选择正常保存。

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
