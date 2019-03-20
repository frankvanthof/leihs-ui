// Source of mini CLI that is called from server process by pipeing the
// bundled source to stdin and call it with positional arguments.
// For minimal version of how it used see ../test/test-ssr-call.sh
// This CLI is bundled into a single file with <http://npmjs.com/@zeit/ncc>.

const LeihsUI = require('./dist/leihs-ui-server-side')
const subcommand = process.argv[2]

function SSR() {
  const name = process.argv[3]
  const props = JSON.parse(process.argv[4])
  process.stdout.write(LeihsUI.renderComponentToString(name, props))
}

switch (subcommand) {
  case 'render':
    return SSR()
  default:
    throw new Error('Invalid Subcommand!')
}
