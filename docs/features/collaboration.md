---
title: 协作
description: 围绕 Project 和 Task 组织多人协作，明确接单、验收与交付。
sidebar_position: 61
---

# 协作

协作把 Project 的目标拆成 Task，交给团队成员名下的 Agent 执行，再由人验收交付。它处在任务分配、执行与验收阶段，前提是已部署的协作服务、云端登录和 Desktop 注册，而不是打开一个本地工作区就能开始；当前成熟度为 **部分可用**。

## 打开方式

- 入口：左侧栏的**协作**入口，打开整页 Collaboration 工作台；页内可切换项目、我的工作、收件箱、公共动态、云盘、成员与设置。
- 作用对象：Project、Task、成员与 Agent；不是单个本地会话或工作区。
- 前提：管理员提供的协作服务地址（应与 Cloud 登录地址一致）与账号、已完成的 Cloud 登录和 Desktop 注册，以及可用的 Agent Runtime。
- 手机协作：需要个人 Zulip 账号、官方 Zulip App，以及包含当前用户与 SciForge Bot 的私人 Channel；Topic 需由用户自行创建。

![SciForge Cloud 协作连接界面](/img/docs/guides/cloud-collaboration-connect.png)
*图 1：Cloud 协作的连接、Agent 与 Project 设置；连接服务前需完成登录和 Desktop 注册。*

## 能做什么

| 你要完成的事 | 怎么做 | 产出 |
| --- | --- | --- |
| 建立多人项目 | 创建 Project，填写目标与交付，由 Coordinator 补全工作模块；确认需求版本后成员接受邀请 | 共享目标、成员与任务看板 |
| 领取任务 | Worker 在收件箱查看 Task Offer，由人手动接受；离线时先保存接受意图 | 云端原子领取回执、本机 Execution 与固定会话 |
| 执行并交付 | 在 Worker 会话中执行，提交交付说明与选定文件 | 等待验收的 Delivery |
| 验收或返修 | Coordinator 检查交付，采纳或要求返修；全部任务完成后收口项目 | 任务完成、项目结果与历史记录 |

## 典型流程

1. 先在身份页完成 Cloud 登录与 Desktop 注册，再在协作设置中填写管理员提供的服务地址并连接。
2. 创建 Project，保存目标与交付；Coordinator 补全工作模块和验收标准，所有者确认需求版本后成员才能接受邀请。
3. 成员在收件箱接受 Task Offer；只有人点击接受后才会创建本地 Execution，第一台成功领取的设备成为执行者。
4. Worker 在固定会话中执行并提交交付；Coordinator 验收，必要时要求返修，最终采纳并完成项目。

![SciForge Cloud 协作项目页面](/img/docs/guides/cloud-collaboration-projects.png)
*图 2：Project 与 Task 区域展示共享目标、成员分工和验收状态。*

## 输入、输出与权限

- 读取：Project、成员、Task Offer、收件箱、交付与项目结果，以及本机 Session 的协作归属。
- 写入：Project、需求、Task、评论与交付会写入外部协作服务；本机另存状态、待发队列和执行日志。
- 审批或外部影响：创建或删除项目、邀请或移除成员、派单或改派、提交或采纳交付、发布结果都会影响其他用户，需要确认。
- 不会做什么：不自动把本地工作区或文件同步给 Project；只有经确认的交付才上传选定文件；不让 Agent 自动接单，也不把手机端点当作本机审批权。

## 已知限制

- 依赖外部部署、账号、Desktop 注册和协作服务，不是开箱即用；启用前先核对功能状态页。
- 需要可用的 Agent Runtime 才能执行 Task；领取成功但 Runtime 未就绪时只显示“已领取 · 等待 Runtime”。
- 手机端使用官方 Zulip App；一个 Topic 绑定一个固定 Session，当前没有解除或换绑入口。
- Coordinator 与 Worker 是 Project 和 Task 内的角色，不是两种账号；同一用户可在不同项目中承担不同角色。
- 手机审批默认关闭，只有权限系统标记为可远程一次性审批的请求才会出现审批卡片。
- 网络中断时应先查看队列与恢复，不要重复提交；凭据缺失或设备失效会停止同步并隔离本地执行。

## 相关页面

- [身份与登录](./identity-access.md)：Cloud 登录与活跃设备是协作的前提。
- [内容空间](./content-space.md)：协作页的云盘区段复用内容空间能力。
- [远程资源与协作](../operations/remote-and-collaboration.md)：区分 Cloud 协作与 Remote SSH。
- [功能状态与限制](../reference/feature-status.md)：Cloud 协作的当前成熟度。

> 实现依据：`@sciforge/domain-collaboration` v13.0.0。
