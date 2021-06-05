import WebSocketClient from '@src/gateway/WebSocketClient'
import IdentifyOptions from '@src/gateway/interfaces/IdentifyOptions'
import { OPCodes, WebSocketClientStates } from '@src/core/Constants'
import { GatewayIdentify, GatewayIdentifyData, GatewayResume, GatewayResumeData } from 'discord-api-types'

export default function identify(
  client: WebSocketClient,
  options: IdentifyOptions
): GatewayIdentify | GatewayResume {
  const mode =
    (client.sessionID && client.closeSequence > 0) && (!options.useReconnectOnly || options.forceResume)
    ? 'resume'
    : 'default'
  const { token } = options

  console.log('shard', client.id, mode, 'identity')

  let d: GatewayIdentifyData | GatewayResumeData,
    op: OPCodes.IDENTIFY | OPCodes.RESUME

  switch (mode) {
    case 'default': {
      const { intents, properties, presence, compress } = options

      client.status = WebSocketClientStates.IDENTIFYING
      op = OPCodes.IDENTIFY

      d = {
        token,
        intents,
        properties,
        presence: presence || undefined,
        compress,
        shard: [ client.id, client.manager.totalShards ]
      }
    } break

    case 'resume':
      client.status = WebSocketClientStates.RESUMING
      op = OPCodes.RESUME

      d = {
        token,
        session_id: client.sessionID!,
        seq: client.closeSequence
      }
      break
  }

  return {
    d, op
  } as unknown as GatewayIdentify | GatewayResume
}
