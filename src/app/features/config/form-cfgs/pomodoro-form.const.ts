// tslint:disable:max-line-length
import {ConfigFormSection} from '../global-config.model';
import {T} from '../../../t.const';

export const POMODORO_FORM_CFG: ConfigFormSection = {
  title: T.F_POMODORO.TITLE,
  key: 'pomodoro',
  help: T.F_POMODORO.HELP,
  items: [
    {
      key: 'isEnabled',
      type: 'checkbox',
      templateOptions: {
        label: T.F_POMODORO.IS_ENABLED
      },
    },
    {
      key: 'isStopTrackingOnBreak',
      type: 'checkbox',
      templateOptions: {
        label: T.F_POMODORO.IS_STOP_TRACKING_ON_BREAK
      },
    },
    {
      key: 'isManualContinue',
      type: 'checkbox',
      templateOptions: {
        label: T.F_POMODORO.IS_MANUAL_CONTINUE
      },
    },
    {
      key: 'isPlaySound',
      type: 'checkbox',
      templateOptions: {
        label: T.F_POMODORO.IS_PLAY_SOUND
      },
    },
    {
      key: 'isPlaySoundAfterBreak',
      type: 'checkbox',
      templateOptions: {
        label: T.F_POMODORO.IS_PLAY_SOUND_AFTER_BREAK
      },
    },
    {
      key: 'isPlayTick',
      type: 'checkbox',
      templateOptions: {
        label: T.F_POMODORO.IS_PLAY_TICK
      },
    },
    {
      key: 'duration',
      type: 'duration',
      templateOptions: {
        label: T.F_POMODORO.DURATION
      },
    },
    {
      key: 'breakDuration',
      type: 'duration',
      templateOptions: {
        label: T.F_POMODORO.BREAK_DURATION
      },
    },
    {
      key: 'longerBreakDuration',
      type: 'duration',
      templateOptions: {
        label: T.F_POMODORO.LONGER_BREAK_DURATION
      },
    },
    {
      key: 'cyclesBeforeLongerBreak',
      type: 'input',
      templateOptions: {
        label: T.F_POMODORO.CYCLES_BEFORE_LONGER_BREAK,
        type: 'number',
        min: 1,
      },
    },
  ]
};
// tslint:enable:max-line-length
