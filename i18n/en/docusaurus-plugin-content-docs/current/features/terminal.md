---
title: Terminal
description: Run commands directly in the workspace, verify the results, and keep key output in the session.
sidebar_position: 50
---

# Terminal

Terminal puts the command-line environment for the current workspace in the bottom panel. It is suited to running scripts, checking logs, and confirming the status of long-running tasks. You type commands in the panel yourself; when the Agent runs commands in a session, it follows the Runtime's approval and sandbox policies. These are not the same authorization chain.

## How to open it

- Entry: **Terminal** in the top toolbar, or **Terminal** in the bottom panel.
- Target: the current workspace. The terminal process uses the workspace root as its initial working directory.
- Prerequisite: a workspace is open, and the local or remote Workspace Host can start a system shell.
- Tabs: a workspace can have multiple tabs (up to 8), with support for renaming, closing other tabs, closing all tabs, and restarting the process.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Run a one-off command | Enter a command in a tab and press Enter | Terminal output and the process exit status |
| Watch a long-running task | Keep the tab open and scroll through the ongoing output | Task progress; closing the tab ends that terminal process |
| Separate tasks | Create and name separate tabs | Command-line sessions isolated by tab |
| Reproduce experiment steps | Put the commands in a script, run it in the terminal, and record key output | Commands you can run again, plus exit statuses |

## Typical workflow

1. Confirm that the workspace shown at the top is the project this task should work on.
2. Open Terminal and run `pwd` and read-only commands first to confirm the directory, interpreter, and dependencies.
3. For commands that will write files, access the network, or install software, check the target paths, arguments, and recovery plan first.
4. Explain the purpose of the command in the session, and bring key output, exit statuses, or error messages back into the conversation.
5. Check the file state after the task. Copy terminal content you need to keep into notes or an artifact.

## Inputs, outputs, and permissions

- Reads: commands can read files, environment variables, and network resources that the current user has permission to access.
- Writes: commands can modify workspace files and may also write outside the workspace. The working directory is not a filesystem sandbox.
- Approval or external effects: Terminal does not prompt for each command. Operations such as installing dependencies, accessing the network, and overwriting files take effect directly under the current user's permissions.
- Agent execution: commands started by the Agent are governed by its Runtime's approval and sandbox settings. There is no promise that all commands skip approval, and no guarantee that every command triggers a prompt.
- Output retention: commands and output stay with the tab in the current workspace and are not kept after the tab closes. Results from Agent-started commands return to the session context with the tool call.
- What it does not do: it does not automatically write terminal content into the conversation record. Closing a tab ends the corresponding terminal process, but switching workspaces does not automatically end terminals that are already running.

## Known limitations

- Terminal processes in remote workspaces run remotely, and output is read through incremental cursors. Remote controlled terminals are pipe-based and do not claim full pseudo-terminal (PTY) compatibility.
- The tab limit is 8. Closing all tabs collapses the panel, and unsaved screen content is not restored.
- Command availability depends on the shell, PATH, and dependencies on the local or remote host. SciForge does not install missing tools for you.
- Terminal scrollback is limited. Write important output to files or logs, and use persistent scheduling or logging for long-running tasks.
- Content in the manual terminal does not automatically enter the Agent context. To inform the Agent, paste the necessary excerpts into the session or have it run the commands itself.

## Related pages

- [Workbench tools](../workbench/tools.md): how files, Terminal, Browser, and Computer Use divide responsibilities.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): workspace locations and session state.
- [Permissions and security](../operations/security.md): approvals, credentials, and the scope of command effects.
- [Remote resources and collaboration](../operations/remote-and-collaboration.md): terminals and data boundaries in remote workspaces.

> Implementation basis: `@sciforge/domain-terminal` v1.0.1.
