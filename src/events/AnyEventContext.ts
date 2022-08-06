import {
  ChannelCreateEventContext,
  ChannelDeleteEventContext,
  ChannelPinsUpdateEventContext,
  ChannelUpdateEventContext
} from '@src/events/channel'
import {
  GuildMembersChunkEventContext,
  IpcMessageEventContext,
  MessageCreateEventContext,
  PresenceUpdateEventContext,
  ReadyEventContext,
  ShardConnectedEventContext
} from '@src/events/ctx'
import {
  AbstractEventContext,
  ExitingEventContext,
  RestructuringEventContext
} from '@src/events/interfaces'
import {
  ThreadCreateEventContext,
  ThreadDeleteEventContext,
  ThreadListSyncEventContext,
  ThreadUpdateEventContext,
  ThreadMemberUpdateEventContext,
  ThreadMembersUpdateEventContext
} from '@src/events/thread'
import { GuildEmojisUpdatedEventContext } from '@src/events/emoji'
import { UserUpdateEventContext } from '@src/events/user'

export type AnyEventContext =
  AbstractEventContext |
  ChannelCreateEventContext |
  ChannelDeleteEventContext |
  ChannelPinsUpdateEventContext |
  ChannelUpdateEventContext |
  GuildMembersChunkEventContext |
  IpcMessageEventContext |
  MessageCreateEventContext |
  PresenceUpdateEventContext |
  ReadyEventContext |
  ShardConnectedEventContext |
  ExitingEventContext |
  RestructuringEventContext |
  ThreadCreateEventContext |
  ThreadDeleteEventContext |
  ThreadListSyncEventContext |
  ThreadUpdateEventContext |
  ThreadMemberUpdateEventContext |
  ThreadMembersUpdateEventContext |
  GuildEmojisUpdatedEventContext |
  UserUpdateEventContext