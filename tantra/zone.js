/// Zone Server
import { MIXIN } from '../core/core.js'
import { DATAPATH, SERVERHOST, BASEPORT } from './config.js'

import { TServer, KEYWORDS } from './socket.js'
import { TMap } from './map.js'

import { CUser } from './user.js'

//==================================================================
class CZone extends MIXIN(TServer, TMap) {
//==================================================================
	static CLIENT = CUser
	static serverSecret = secret => KEYWORDS.fill(0)
	
	zone_id = 0
	port = 0
	
	constructor({id}) {
		super({id})
		this.tag = `Z[${id}]` 
		this.zone_id = id
		this.port = BASEPORT + id
	}
	
	reboot() {
		this.init_map()
		return this.listen(this.port, SERVERHOST)
	}
	
	/// Timers
	async process_sec_timer() {
	}
}


export { CZone }