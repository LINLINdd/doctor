import { positioning } from './request'

export function getpositioning() {
    return positioning({
        url: 'gitrepo/ask_v2_develop/misc/location_hospital.json?t=2'
    })
}