import type {
  FacilityCreateInput,
  ReasonCreateInput,
  TestCreateInput,
} from '../generated/prisma/models'

export const facilitySeed: FacilityCreateInput[] = [
  { name: 'Gusa HC' },
  { name: 'RHU Kapatagan' },
  { name: 'NMMC' },
  { name: 'CHO Malaybalay' },
  { name: 'Pagatpat HC' },
]

export const reasonSeed: ReasonCreateInput[] = [
  { code: 'B', name: 'Baseline' },
  { code: 'PT1', name: 'Post Treatment 1' },
  { code: 'PT2', name: 'Post Treatment 2' },
  { code: 'D', name: 'Diagnosis' },
  { code: 'M', name: 'Follow-up' },
]

export const testSeed: TestCreateInput[] = [
  {
    name: 'Sputum Smear Microscopy',
    code: 'SSM',
  },
  {
    name: 'TB Culture',
    code: 'TBC',
  },
  {
    name: 'Drug Susceptibility Testing',
    code: 'DST',
  },
  {
    name: 'Xpert XDR',
    code: 'XDR',
  },
  {
    name: 'Bedaquiline, Pretomanid, and Linezolid',
    code: 'BPaL',
  },
  {
    name: 'Xpert MTB/RIF Ultra',
    code: 'ULTRA',
  },
]
