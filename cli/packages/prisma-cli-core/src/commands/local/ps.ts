import { Command, Flags, flags } from 'prisma-cli-engine'
import Docker from './Docker'

export default class PsLocal extends Command {
  static topic = 'local'
  static command = 'ps'
  static description = 'List docker containers'
  static group = 'local'
  static hidden = true
  static flags: Flags = {
    name: flags.string({
      char: 'n',
      description: 'Name of the cluster instance',
      defaultValue: 'local',
    }),
  }
  async run() {
    const docker = new Docker(this.out, this.config, this.env, this.flags.name)
    await docker.ps()
  }
}
