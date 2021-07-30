export const JUDGE_STATUS = {
  '-2': {
    name: 'Compile Error',
    short: 'CE',
    color: '#ff9f43',
    type: 'warning'
  },
  '-1': {
    name: 'Wrong Answer',
    short: 'WA',
    color: '#ee5253',
    type: 'error'
  },
  '0': {
    name: 'Accepted',
    short: 'AC',
    color: '#1dd1a1',
    type: 'success'
  },
  '1': {
    name: 'Time Limit Exceeded',
    short: 'TLE',
    color: '#ee5253',
    type: 'error'
  },
  '2': {
    name: 'Time Limit Exceeded',
    short: 'TLE',
    color: '#ee5253',
    type: 'error'
  },
  '3': {
    name: 'Memory Limit Exceeded',
    short: 'MLE',
    color: '#ee5253',
    type: 'error'
  },
  '4': {
    name: 'Runtime Error',
    short: 'RE',
    color: '#ee5253',
    type: 'error'
  },
  '5': {
    name: 'System Error',
    short: 'SE',
    color: '#ee5253',
    type: 'error'
  },
  '6': {
    name: 'Pending',
    color: '#ff9f43',
    type: 'warning'
  },
  '7': {
    name: 'Judging',
    color: 'blue',
    type: 'primary'
  },
  '8': {
    name: 'Partial Accepted',
    short: 'PAC',
    color: '#6c5ce7',
    type: 'primary'
  },
  '9': {
    name: 'Submitting',
    color: '#ff9f43',
    type: 'warning'
  }
}

export const CONTEST_STATUS = {
  'NOT_START': '1',
  'UNDERWAY': '0',
  'ENDED': '-1'
}

export const CONTEST_STATUS_REVERSE = {
  '1': {
    name: 'Not Started',
    color: 'primary'
  },
  '0': {
    name: 'Underway',
    color: 'success'
  },
  '-1': {
    name: 'Ended',
    color: 'error'
  }
}

export const RULE_TYPE = {
  ACM: 'ACM',
  OI: 'OI',
  experience: 'experience'
}

export const CONTEST_TYPE = {
  PUBLIC: 'Public',
  PRIVATE: 'Password Protected'
}

export const USER_TYPE = {
  REGULAR_USER: 'Regular User',
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin'
}

export const PROBLEM_PERMISSION = {
  NONE: 'None',
  OWN: 'Own',
  ALL: 'All'
}

export const STORAGE_KEY = {
  AUTHED: 'authed',
  PROBLEM_CODE: 'problemCode',
  languages: 'languages'
}

export function buildProblemCodeKey (problemID, contestID = null) {
  if (contestID) {
    return `${STORAGE_KEY.PROBLEM_CODE}_${contestID}_${problemID}`
  }
  return `${STORAGE_KEY.PROBLEM_CODE}_NaN_${problemID}`
}

export const GOOGLE_ANALYTICS_ID = 'UA-111499601-1'

export const USER_GRADE = {
  '0': {
    name: 'Newbie',
    short: '0',
    color: '#636e72'
  },
  '1': {
    name: 'Pupil',
    short: '1',
    color: 'primary'
  },
  '2': {
    name: 'Specialist',
    short: '2',
    color: '#6c5ce7'
  },
  '3': {
    name: 'Expert',
    short: '3',
    color: '#1dd1a1'
  },
  '4': {
    name: 'Candidate Master',
    short: '4',
    color: '#ff9f43'
  },
  '5': {
    name: 'Master',
    short: '5',
    color: '#ee5253'
  },
  '6': {
    name: 'Grandmaster',
    short: '6',
    color: '#222f3e'
  }
}
