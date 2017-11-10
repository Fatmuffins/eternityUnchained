import { Injectable } from '@angular/core';

@Injectable()
interface Character {

  name: string
  cclass: string
  experience: number
  stats: {
    strength: number
    dexterity: number
    constitution: number
    intellect: number
    wisdom: number
    charisma: number
  }
  skills: {

  }
  inventory?: {

  }

}


function charSave(): void {

}

function charStat(stat: string): number {
  return
}
