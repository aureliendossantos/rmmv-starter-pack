'use strict';

/*:
 * @plugindesc Add all of the MV commands as πco commands
 *
 * @author grm <grimfw@gmail.com>
 *
 * This plugin add all missing commands !
 * This code is released under MIT license.
 */

// Check dependencies betweens plugins
if (typeof π === 'undefined') throw 'Core is not installed';
π.core.require([
  [π.plugins.core.version, '>= 1.2.0-dev'],
  [π.plugins.picture.version, '>= 1.0.0-dev']
]);

// Expose the version of the plugin
π.plugins.mv = {
  version: '1.0.0-dev'
};

π.dialog = π.dialog || {};
π.dialog.default_choice = -1;
π.dialog.default_cancel = -1;

π.window = π.window || {};

π.window.background = {};
π.window.background.NORMAL = 0;
π.window.background.DARK = 1;
π.window.background.TRANSPARENT = 2;

π.window.position = {};
π.window.position.TOP = 0;
π.window.position.MIDDLE = 1;
π.window.position.BOTTOM = 2;
π.window.position.LEFT = 0;
π.window.position.RIGHT = 2;

π.actor.equipement = {};
π.actor.equipement.WEAPON = 1;
π.actor.equipement.SHIELD = 2;
π.actor.equipement.HEAD = 3;
π.actor.equipement.BODY = 4;
π.actor.equipement.ACCESSORY = 5;

π.fade = π.fade || {};
π.fade.BLACK = 0;
π.fade.WHITE = 1;
π.fade.NOTHING = 2;

π.vehicle = π.vehicle || {};
π.vehicle.BOAT = 0;
π.vehicle.SHIP = 1;
π.vehicle.AIRSHIP = 2;

π.speed = π.speed || {};
π.speed.SLOW_8x = 1;
π.speed.SLOW_4x = 2;
π.speed.SLOW_2x = 3;
π.speed.NORMAL = 4;
π.speed.FAST_2x = 5;
π.speed.FAST_4x = 5;

π.event = π.event || {};
π.event.movement = {};
π.event.movement.ROUTE_END = 0;
π.event.movement.ROUTE_MOVE_DOWN = 1;
π.event.movement.ROUTE_MOVE_LEFT = 2;
π.event.movement.ROUTE_MOVE_RIGHT = 3;
π.event.movement.ROUTE_MOVE_UP = 4;
π.event.movement.ROUTE_MOVE_LOWER_L = 5;
π.event.movement.ROUTE_MOVE_LOWER_R = 6;
π.event.movement.ROUTE_MOVE_UPPER_L = 7;
π.event.movement.ROUTE_MOVE_UPPER_R = 8;
π.event.movement.ROUTE_MOVE_RANDOM = 9;
π.event.movement.ROUTE_MOVE_TOWARD = 10;
π.event.movement.ROUTE_MOVE_AWAY = 11;
π.event.movement.ROUTE_MOVE_FORWARD = 12;
π.event.movement.ROUTE_MOVE_BACKWARD = 13;
π.event.movement.ROUTE_JUMP = 14;
π.event.movement.ROUTE_WAIT = 15;
π.event.movement.ROUTE_TURN_DOWN = 16;
π.event.movement.ROUTE_TURN_LEFT = 17;
π.event.movement.ROUTE_TURN_RIGHT = 18;
π.event.movement.ROUTE_TURN_UP = 19;
π.event.movement.ROUTE_TURN_90D_R = 20;
π.event.movement.ROUTE_TURN_90D_L = 21;
π.event.movement.ROUTE_TURN_180D = 22;
π.event.movement.ROUTE_TURN_90D_R_L = 23;
π.event.movement.ROUTE_TURN_RANDOM = 24;
π.event.movement.ROUTE_TURN_TOWARD = 25;
π.event.movement.ROUTE_TURN_AWAY = 26;
π.event.movement.ROUTE_SWITCH_ON = 27;
π.event.movement.ROUTE_SWITCH_OFF = 28;
π.event.movement.ROUTE_CHANGE_SPEED = 29;
π.event.movement.ROUTE_CHANGE_FREQ = 30;
π.event.movement.ROUTE_WALK_ANIME_ON = 31;
π.event.movement.ROUTE_WALK_ANIME_OFF = 32;
π.event.movement.ROUTE_STEP_ANIME_ON = 33;
π.event.movement.ROUTE_STEP_ANIME_OFF = 34;
π.event.movement.ROUTE_DIR_FIX_ON = 35;
π.event.movement.ROUTE_DIR_FIX_OFF = 36;
π.event.movement.ROUTE_THROUGH_ON = 37;
π.event.movement.ROUTE_THROUGH_OFF = 38;
π.event.movement.ROUTE_TRANSPARENT_ON = 39;
π.event.movement.ROUTE_TRANSPARENT_OFF = 40;
π.event.movement.ROUTE_CHANGE_IMAGE = 41;
π.event.movement.ROUTE_CHANGE_OPACITY = 42;
π.event.movement.ROUTE_CHANGE_BLEND_MODE = 43;
π.event.movement.ROUTE_PLAY_SE = 44;
π.event.movement.ROUTE_SCRIPT = 45;

π.frequency = π.frequency || {};
π.frequency.LOWEST = 1;
π.frequency.LOW = 2;
π.frequency.NORMAL = 3;
π.frequency.HIGH = 4;
π.frequency.HIGHEST = 5;

π.follower = π.follower || {};
π.followers = π.followers || {};

π.balloon = π.balloon || {};
π.balloon.EXCLAMATION = 1;
π.balloon.QUESTION = 2;
π.balloon.MUSIC_NOTE = 3;
π.balloon.HEART = 4;
π.balloon.ANGER = 5;
π.balloon.SWEAT = 6;
π.balloon.SPIDER_WEB = 7;
π.balloon.SILENCE = 8;
π.balloon.BULB = 9;
π.balloon.ZZZ = 10;
π.balloon.USER1 = 11;
π.balloon.USER2 = 12;
π.balloon.USER3 = 13;
π.balloon.USER4 = 14;
π.balloon.USER5 = 15;

π.time = π.time || {};
π.screen = π.screen || {};
π.color = π.color || {};

π.weather = π.weather || {};
π.weather.NONE = 'none';
π.weather.RAIN = 'rain';
π.weather.STORM = 'storm';
π.weather.SNOW = 'snow';

π.bgm = π.bgm || {};
π.bgs = π.bgs || {};
π.me = π.me || {};
π.se = π.se || {};
π.video = π.video || {};

π.battle = π.ballte || {};
π.battle.VICTORY = 0;
π.battle.ESCAPE = 1;
π.battle.DEFEAT = 2;

π.shop = π.shop || {};
π.menu = π.menu || {};
π.save = π.save || {};
π.load = π.load || {};
π.system = π.system || {};
π.scene = π.scene || {};

π.map = π.map || {};
π.map.parallax = π.map.parallax || {};
π.map.LAYER1 = 0;
π.map.LAYER2 = 1;
π.map.LAYER3 = 2;
π.map.LAYER4 = 3;

// The core of the script

π.dialog._showMessage = function(
  message,
  background,
  position,
  facesetName,
  facesetIndex,
  needMessage,
  callback
) {
  if ($gameMessage.isBusy()) {
    return false;
  }
  if (needMessage) {
    $gameMessage.setFaceImage(facesetName, facesetIndex);
    $gameMessage.setBackground(background);
    $gameMessage.setPositionType(position);
    const lines = message.split('\n');
    lines.forEach(function(line) {
      $gameMessage.add(line);
    });
  }
  callback();
  π._tryInterpreter(function(self) {
    return self.setWaitMode('message');
  });
  return true;
};

/**
 * Display a message
 * @param {string} message - The message to be displayed
 * @param {int} background - The background kind of the message
 * @param {int} position - The position of the window message
 * @param {string} faceset_name - The name of the faceset
 * @param {int} faceset_index - The index of the faceset
 */
π.dialog.message = function(
  message,
  background,
  position,
  faceset_name,
  faceset_index
) {
  const dbg = π.window.background.NORMAL;
  const dps = π.window.position.BOTTOM;
  const fname = typeof faceset_name === 'undefined' ? '' : faceset_name;
  const findex = typeof faceset_index === 'undefined' ? 0 : faceset_index;
  const bg = typeof background === 'undefined' ? dbg : background;
  const pos = typeof position === 'undefined' ? dps : position;
  const messages = typeof message === 'undefined' ? '' : message;
  return π.dialog._showMessage(
    messages,
    bg,
    pos,
    fname,
    findex,
    true,
    function() {}
  );
};

/**
 * Returns the value of the last choice
 */
π.dialog.result = function() {
  return $gameMessage.picoLastChoice;
};

/**
 * Display a choice
 * @param {array} choice - The list of choices
 * @param {int} default_choice - the index of the default choice
 * @param {boolean} allow_cancel - allow or not the cancelation of the choice
 * @param {int} background - The background kind of the choice
 * @param {int} position - The position of the window choice
 * @param {string} message - The message to be displayed
 * @param {int} mbackground - The background kind of the message
 * @param {int} mposition - The position of the window message
 * @param {string} faceset_name - The name of the faceset
 * @param {int} faceset_index - The index of the faceset
 */
π.dialog.choice = function(
  choices,
  default_choice,
  allow_cancel,
  background,
  position,
  message,
  mbackground,
  mposition,
  faceset_name,
  faceset_index
) {
  const dc = default_choice;
  const ac = allow_cancel;
  const dbg = π.window.background.NORMAL;
  const dps = π.window.position.RIGHT;
  const bg = typeof background === 'undefined' ? dbg : background;
  const pos = typeof position === 'undefined' ? dps : position;
  const can = typeof ac === 'undefined' || !ac ? -1 : -2;
  const cho = typeof dc === 'undefined' || dc === false ? -1 : dc;

  const mdps = π.window.position.BOTTOM;
  const fname = typeof faceset_name === 'undefined' ? '' : faceset_name;
  const findex = typeof faceset_index === 'undefined' ? 0 : faceset_index;
  const mbg = typeof mbackground === 'undefined' ? dbg : mbackground;
  const mpos = typeof mposition === 'undefined' ? mdps : mposition;
  const needMessage = typeof message === 'string';

  return π.dialog._showMessage(
    message,
    mbg,
    mpos,
    fname,
    findex,
    needMessage,
    function() {
      $gameMessage.setChoices(choices, cho, can);
      $gameMessage.setChoiceBackground(bg);
      $gameMessage.setChoicePositionType(pos);
      $gameMessage.setChoiceCallback(function(n) {
        $gameMessage.picoLastChoice = n < 0 ? -1 : n;
      });
    }
  );
};

/**
 * Display a choice
 * @param {string} message - The message to be displayed
 * @param {array} choices - The list of choices
 * @param {int} default_choice - the index of the default choice
 * @param {boolean} allow_cancel - allow or not the cancelation of the choice
 * @param {int} background - The background kind of the choice
 * @param {int} position_message - The position of the window message
 * @param {int} position_choice - The position of the window choice
 * @param {string} faceset_name - The name of the faceset
 * @param {int} faceset_index - The index of the faceset
 */
π.dialog.message_with_choice = function(
  message,
  choices,
  default_choice,
  allow_cancel,
  background,
  position_message,
  position_choice,
  faceset_name,
  faceset_index
) {
  const db = π.window.background.NORMAL;
  const dm = π.window.position.BOTTOM;
  const dr = π.window.position.RIGHT;
  const dc = typeof default_choice === 'undefined' ? 0 : default_choice;
  const ac = typeof allow_cancel === 'undefined' ? true : allow_cancel;
  const bg = typeof background === 'undefined' ? db : background;
  const pm = typeof position_message === 'undefined' ? dm : position_message;
  const pc = typeof position_choice === 'undefined' ? dr : position_choice;
  const fn = typeof faceset_name === 'undefined' ? '' : faceset_name;
  const fi = typeof faceset_index === 'undefined' ? 0 : faceset_index;
  return π.dialog.choice(choices, dc, ac, bg, pc, message, bg, pm, fn, fi);
};

/**
 * Display a input entry
 * @param {int} variable_id - Targeted variable
 * @param {int} max_digits - the number of allowed digit
 * @param {string} message - The message to be displayed
 * @param {int} mbackground - The background kind of the message
 * @param {int} mposition - The position of the window message
 * @param {string} faceset_name - The name of the faceset
 * @param {int} faceset_index - The index of the faceset
 */
π.dialog.input_number = function(
  target,
  max_digits,
  message,
  mbackground,
  mposition,
  faceset_name,
  faceset_index
) {
  const dbg = π.window.background.NORMAL;
  const mdps = π.window.position.BOTTOM;
  const fname = typeof faceset_name === 'undefined' ? '' : faceset_name;
  const findex = typeof faceset_index === 'undefined' ? 0 : faceset_index;
  const mbg = typeof mbackground === 'undefined' ? dbg : mbackground;
  const mpos = typeof mposition === 'undefined' ? mdps : mposition;
  const needMessage = typeof message === 'string';
  const max =
    typeof max_digits === 'undefined' || max_digits > 8 || max_digits < 1
      ? 1
      : max_digits;

  return π.dialog._showMessage(
    message,
    mbg,
    mpos,
    fname,
    findex,
    needMessage,
    function() {
      $gameMessage.setNumberInput(target, max);
    }
  );
};

/**
 * Display a item entry
 * @param {int} variable_id - Targeted variable
 * @param {int} item_kind - the kind of the item
 * @param {string} message - The message to be displayed
 * @param {int} mbackground - The background kind of the message
 * @param {int} mposition - The position of the window message
 * @param {string} faceset_name - The name of the faceset
 * @param {int} faceset_index - The index of the faceset
 */
π.dialog.select_item = function(
  target,
  kind,
  message,
  mbackground,
  mposition,
  faceset_name,
  faceset_index
) {
  const dbg = π.window.background.NORMAL;
  const mdps = π.window.position.BOTTOM;
  const fname = typeof faceset_name === 'undefined' ? '' : faceset_name;
  const findex = typeof faceset_index === 'undefined' ? 0 : faceset_index;
  const mbg = typeof mbackground === 'undefined' ? dbg : mbackground;
  const mpos = typeof mposition === 'undefined' ? mdps : mposition;
  const needMessage = typeof message === 'string';
  const k = typeof kind === 'undefined' || kind > 5 || kind < 1 ? 1 : kind;

  return π.dialog._showMessage(
    message,
    mbg,
    mpos,
    fname,
    findex,
    needMessage,
    function() {
      $gameMessage.setItemChoice(target, k);
    }
  );
};

/**
 * Display a scrolling message
 * @param {string} message - The message to be displayed
 * @param {int} speed - The speed
 * @param {int} speed - Cannot be skipped
 */
π.dialog.scrolling_message = function(message, speed, not_skippable) {
  if ($gameMessage.isBusy()) {
    return false;
  }
  const sp = typeof speed === 'undefined' ? 2 : speed;
  const sk = typeof not_skippable === 'undefined' ? false : !!not_skippable;
  const lines = (typeof message === 'undefined' ? '' : message).split('\n');
  $gameMessage.setScroll(sp, not_skippable);
  lines.forEach(function(line) {
    $gameMessage.add(line);
  });

  π._tryInterpreter(function(self) {
    return self.setWaitMode('message');
  });
  return true;
};

// Timer combinators
π.timer = {};

/**
 * Start the timer with seconds
 * @param {int} the number of seconds
 */
π.timer.start = function(seconds) {
  return $gameTimer.start(seconds * 60);
};

/**
 * Start the timer with frames
 * @param {int} the number of seconds
 */
π.timer.start_with_frames = function(frames) {
  return $gameTimer.start(frames);
};

/**
 * Stop the timer
 */
π.timer.stop = function() {
  return $gameTimer.stop();
};

/**
 * Returns the value of the timer in seconds
 */
π.timer.seconds = function() {
  return $gameTimer.seconds();
};

/**
 * Returns the value of the timer in frames
 */
π.timer.frames = function() {
  return $gameTimer._frames;
};

/**
 * Returns true if the timer is working, otherwise false
 */
π.timer.is_working = function() {
  return $gameTimer.isWorking();
};

// Party Patch

/**
 * Give gold
 * @param {int} amount the amount of gold
 */
π.party.increase_gold = function(value) {
  value = typeof value === 'number' ? value : 0;
  $gameParty.gainGold(value);
  return $gameParty.gold();
};

/**
 * Lose gold
 * @param {int} amount the amount of gold
 */
π.party.decrease_gold = function(value) {
  return π.party.lose_gold(0 - value);
};

/**
 * Give a specific item
 * @param {int} item_id
 * @param {int} amount
 */
π.item.give = function(item_id, value) {
  value = typeof value === 'number' ? value : 1;
  const item = $dataItems[item_id];
  if (item) {
    $gameParty.gainItem(item, value);
  }
  return π.item.count(item_id);
};

/**
 * Remove a specific item
 * @param {int} item_id
 * @param {int} amount
 */
π.item.remove = function(item_id, value) {
  value = typeof value === 'number' ? value : 1;
  return π.item.give(item_id, 0 - value);
};

/**
 * Give a specific weapon
 * @param {int} weapon_id
 * @param {int} amount
 */
π.weapon.give = function(weapon_id, value) {
  value = typeof value === 'number' ? value : 1;
  const weapon = $dataWeapons[weapon_id];
  if (weapon) {
    $gameParty.gainItem(weapon, value);
  }
  return π.weapon.count(weapon_id);
};

/**
 * Remove a specific weapon
 * @param {int} weapon_id
 * @param {int} amount
 * @param {bool} include_equip
 */
π.weapon.remove = function(weapon_id, value, include_equip) {
  value = typeof value === 'number' ? value : 1;
  const weapon = $dataWeapons[weapon_id];
  if (weapon) {
    $gameParty.gainItem(weapon, 0 - value, include_equip);
  }
  return π.weapon.count(weapon_id);
};

/**
 * Give a specific armor
 * @param {int} armor_id
 * @param {int} amount
 */
π.armor.give = function(armor_id, value) {
  value = typeof value === 'number' ? value : 1;
  const armor = $dataArmors[armor_id];
  if (armor) {
    $gameParty.gainItem(armor, value);
  }
  return π.armor.count(armor_id);
};

/**
 * Remove a specific armor
 * @param {int} armor_id
 * @param {int} amount
 * @param {bool} include_equip
 */
π.armor.remove = function(armor_id, value, include_equip) {
  value = typeof value === 'number' ? value : 1;
  const armor = $dataArmors[armor_id];
  if (armor) {
    $gameParty.gainItem(armor, 0 - value, include_equip);
  }
  return π.armor.count(armor_id);
};

/**
 * Add a new actor in the team
 * @param {int} actor_id
 * @param {bool} initialized
 */
π.actor.add = function(actor_id, initialized) {
  initialized = typeof initialized === 'undefined' ? false : true;
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (initialized) $gameActors.actor(actor_id).setup(actor_id);
    $gameParty.addActor(actor_id);
  }
  return π.party.team_size();
};

/**
 * Remove an actor of the team
 * @param {int} actor_id
 */
π.actor.remove = function(actor_id) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    $gameParty.removeActor(actor_id);
  }
  return π.party.team_size();
};

/**
 * Increase the HP of an actor
 * @param {int} actor_id
 * @param {int} value
 */
π.actor.increase_hp = function(actor_id, value) {
  const actor = $gameActors.actor(actor_id);
  if (actor && actor.isAlive()) {
    actor.gainHp(Math.abs(value));
    return π.actor.hp(actor_id);
  }
};

/**
 * Decrease the HP of an actor
 * @param {int} actor_id
 * @param {int} value
 * @param {bool} allow_death
 */
π.actor.decrease_hp = function(actor_id, value, allow_death) {
  allow_death = typeof allow_death === 'undefined' ? false : true;
  value = Math.abs(value);
  const actor = $gameActors.actor(actor_id);
  if (actor && actor.isAlive()) {
    const v = !allow_death && actor.hp <= value ? actor.hp - 1 : value;
    actor.gainHp(-v);
    if (actor.isDead()) actor.performCollapse();
    return π.actor.hp(actor_id);
  }
};

/**
 * Increase the HP of all actors
 * @param {int} value
 */
π.party.increase_hp = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.increase_hp(actor._actorId, value);
  });
};

/**
 * Decrease the HP of all actors
 * @param {int} value
 * @param {bool} allow_death
 */
π.party.decrease_hp = function(value, allow_death) {
  allow_death = typeof allow_death === 'undefined' ? false : allow_death;
  $gameParty.members().forEach(function(actor) {
    π.actor.decrease_hp(actor._actorId, value, allow_death);
  });
};

/**
 * Increase the MP of an actor
 * @param {int} actor_id
 * @param {int} value
 */
π.actor.increase_mp = function(actor_id, value) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.gainMp(value);
    return π.actor.mp(actor_id);
  }
};

/**
 * Decrease the MP of an actor
 * @param {int} actor_id
 * @param {int} value
 */
π.actor.decrease_mp = function(actor_id, value) {
  return π.actor.increase_mp(actor_id, -value);
};

/**
 * Increase the MP of all actors
 * @param {int} value
 */
π.party.increase_mp = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.increase_mp(actor._actorId, value);
  });
};

/**
 * Decrease the MP of all actors
 * @param {int} value
 */
π.party.decrease_mp = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.decrease_mp(actor._actorId, value);
  });
};

/**
 * Increase the TP of an actor
 * @param {int} actor_id
 * @param {int} value
 */
π.actor.increase_tp = function(actor_id, value) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.gainTp(value);
    return π.actor.tp(actor_id);
  }
};

/**
 * Decrease the TP of an actor
 * @param {int} actor_id
 * @param {int} value
 */
π.actor.decrease_tp = function(actor_id, value) {
  return π.actor.increase_tp(actor_id, -value);
};

/**
 * Increase the tp of all actors
 * @param {int} value
 */
π.party.increase_tp = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.increase_tp(actor._actorId, value);
  });
};

/**
 * Decrease the MP of all actors
 * @param {int} value
 */
π.party.decrease_tp = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.decrease_tp(actor._actorId, value);
  });
};

/**
 * Add state to an actor
 * @param {int} actor_id
 * @param {int} state_id
 */
π.actor.add_state = function(actor_id, state_id) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    const alreadyDead = actor.isDead();
    actor.addState(state_id);
    if (actor.isDead() && !alreadyDead) {
      actor.performCollapse();
    }
    actor.clearResult();
  }
};

/**
 * Remove state of an actor
 * @param {int} actor_id
 * @param {int} state_id
 */
π.actor.remove_state = function(actor_id, state_id) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    const alreadyDead = actor.isDead();
    actor.removeState(state_id);
    if (actor.isDead() && !alreadyDead) {
      actor.performCollapse();
    }
    actor.clearResult();
  }
};

/**
 * add state to all actors
 * @param {int} state_id
 */
π.party.add_state = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.add_state(actor._actorId, value);
  });
};

/**
 * remove state to all actors
 * @param {int} value
 */
π.party.remove_state = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.remove_state(actor._actorId, value);
  });
};

/**
 * Restore all stats
 * @param {int} actor_id
 */
π.actor.recover_all = function(actor_id) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.recoverAll();
  }
};

/**
 * Recover all actors
 */
π.party.recover_all = function() {
  $gameParty.members().forEach(function(actor) {
    π.actor.recover_all(actor._actorId);
  });
};

/**
 * Increase the Exp of an actor
 * @param {int} actor_id
 * @param {int} value
 * @param {bool} notify notify a level changement
 */
π.actor.increase_exp = function(actor_id, amount, notify) {
  notify = typeof notify === 'undefined' ? true : !!notify;
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.changeExp(π.actor.exp(actor_id) + amount, notify);
    return π.actor.exp(actor_id);
  }
};

/**
 * Decrease the Exp of an actor
 * @param {int} actor_id
 * @param {int} value
 */
π.actor.decrease_exp = function(actor_id, amount) {
  return π.actor.increase_exp(actor_id, -amount, false);
};

/**
 * Increase the Level of an actor
 * @param {int} actor_id
 * @param {int} value
 * @param {bool} notify notify a level changement
 */
π.actor.increase_level = function(actor_id, amount, notify) {
  notify = typeof notify === 'undefined' ? true : !!notify;
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.changeLevel(π.actor.level(actor_id) + amount, notify);
    return π.actor.level(actor_id);
  }
};

/**
 * Decrease the Exp of an actor
 * @param {int} actor_id
 * @param {int} value
 */
π.actor.decrease_level = function(actor_id, amount) {
  return π.actor.increase_level(actor_id, -amount, false);
};

/**
 * increase experience to all users
 * @param {int} amount
 * @param {int} notify
 */
π.party.increase_exp = function(value, notify) {
  notify = typeof notify === 'undefined' ? true : !!notify;
  $gameParty.members().forEach(function(actor) {
    π.actor.increase_exp(actor._actorId, value, notify);
  });
};

/**
 * decrease experience to all users
 * @param {int} amount
 */
π.party.decrease_exp = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.decrease_exp(actor._actorId, value, false);
  });
};

/**
 * increase Level to all users
 * @param {int} amount
 * @param {int} notify
 */
π.party.increase_level = function(value, notify) {
  notify = typeof notify === 'undefined' ? true : !!notify;
  $gameParty.members().forEach(function(actor) {
    π.actor.increase_level(actor._actorId, value, notify);
  });
};

/**
 * decrease Level to all users
 * @param {int} amount
 */
π.party.decrease_level = function(value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.decrease_level(actor._actorId, value, false);
  });
};

/**
 * Increase a Parameter of an actor
 * @param {int} actor_id
 * @param {int} param
 * @param {int} value
 */
π.actor.increase_parameter = function(actor_id, param, amount) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.addParam(param, amount);
    return actor.param(param);
  }
};

/**
 * Decrease a parameter of an actor
 * @param {int} actor_id
 * @param {int} param
 * @param {int} value
 */
π.actor.decrease_parameter = function(actor_id, param, amount) {
  return π.actor.increase_parameter(actor_id, param, -amount);
};

/**
 * Increase a parameter of all actors
 * @param {int} param
 * @param {int} value
 */
π.party.increase_parameter = function(param, value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.increase_parameter(actor._actorId, param, value);
  });
};

/**
 * Decrease a parameter of all actors
 * @param {int} param
 * @param {int} value
 */
π.party.decrease_parameter = function(param, value) {
  $gameParty.members().forEach(function(actor) {
    π.actor.decrease_parameter(actor._actorId, param, value);
  });
};

/**
 * Learn Skill
 * @param {int} actor_id
 * @param {int} skill_id
 */
π.actor.learn_skill = function(actor_id, skill_id) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.learnSkill(skill_id);
  }
};

/**
 * Forget Skill
 * @param {int} actor_id
 * @param {int} skill_id
 */
π.actor.forget_skill = function(actor_id, skill_id) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.forgetSkill(skill_id);
  }
};

/**
 * Learn skill for all the actors
 * @param {int} skill_id
 */
π.party.learn_skill = function(skill_id) {
  $gameParty.members().forEach(function(actor) {
    π.actor.learn_skill(actor._actorId, skill_id);
  });
};

/**
 * Forget skill for all the actors
 * @param {int} skill_id
 */
π.party.forget_skill = function(skill_id) {
  $gameParty.members().forEach(function(actor) {
    π.actor.forget_skill(actor._actorId, skill_id);
  });
};

/**
 * Add equipement
 * @param {int} actor_id
 * @param {int} slot
 * @param {int} item_id
 */
π.actor.add_equipement = function(actor_id, slot, item_id) {
  const container = slot === 1 ? $dataWeapons : $dataArmors;
  const actor = $gameActors.actor(actor_id);
  const item = container[item_id];
  if (actor) {
    actor.changeEquipById(slot, item_id);
    return actor.isEquipped(item);
  }
  return false;
};

/**
 * Drop equipement
 * @param {int} actor_id
 * @param {int} slot
 */
π.actor.drop_equipement = function(actor_id, slot) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    actor.changeEquipById(slot, 0);
    return true;
  }
  return false;
};

/**
 * Get Actor id by member position
 * @param {int} position
 */
π.actor.id = function(position) {
  const actor = $gameParty.members()[position - 1];
  return actor ? actor.actorId() : 0;
};

/**
 * Change and get the name of an actor
 * @param {int} actor_id
 * @param {string} name
 */
π.actor.name = function(actor_id, name) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof name === 'string') {
      actor.setName(name);
    }
    return actor.name();
  }
};

/**
 * CHange and get the actor class
 * @param {int} actor_id
 * @param {int} class_id
 * @param {bool} preserve_level
 */
π.actor.class = function(actor_id, class_id, preserve_level) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof class_id === 'number') {
      const flag = typeof preserve_level === 'boolean' ? preserve_level : true;
      if ($dataClasses[class_id]) {
        actor.changeClass(class_id, flag);
      }
    }
    return actor._classId;
  }
};

/**
 * Change and get the nickname of an actor
 * @param {int} actor_id
 * @param {string} nickname
 */
π.actor.nickname = function(actor_id, nickname) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof nickname === 'string') {
      actor.setNickname(nickname);
    }
    return actor.nickname();
  }
};

/**
 * Change and get the profile of an actor
 * @param {int} actor_id
 * @param {string} profile
 */
π.actor.profile = function(actor_id, profile) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof profile === 'string') {
      actor.setProfile(profile);
    }
    return actor.profile();
  }
};

/**
 * Teleport the player
 * @param {int} map_id
 * @param {int} x
 * @param {int} y
 * @param {int} fade_type
 * @param {int} direction
 */
π.player.teleport = function(map_id, x, y, fade_type, direction) {
  direction = typeof direction === 'number' ? direction : π.direction.PRESERVE;
  fade_type = typeof fade_type === 'number' ? fade_type : π.fade.BLACK;
  if (!$gameParty.inBattle() && !$gameMessage.isBusy()) {
    $gamePlayer.reserveTransfer(map_id, x, y, direction, fade_type);
    π._tryInterpreter(function(self) {
      return self.setWaitMode('transfer');
    });
  }
};

/**
 * Transfer the player (on the same map)
 * @param {int} x
 * @param {int} y
 * @param {int} fade_type
 * @param {int} direction
 */
π.player.transfer = function(x, y, fade_type, direction) {
  direction = typeof direction === 'number' ? direction : π.direction.PRESERVE;
  fade_type = typeof fade_type === 'number' ? fade_type : π.fade.BLACK;
  return π.player.teleport(π.map.id(), x, y, direction, fade_type);
};

/**
 * Set position of an event (on the same map)
 * @param {int} event_id
 * @param {int} x
 * @param {int} y
 * @param {int} direction
 */
π.event.locate = function(event_id, x, y, direction) {
  direction = typeof direction === 'number' ? direction : π.direction.PRESERVE;
  const character = event_id > 0 ? $gameMap.event(event_id) : $gamePlayer;
  if (character) {
    character.locate(x, y);
    character.setDirection(direction);
  }
};

/**
 * Set position of the player (on the same map)
 * @param {int} x
 * @param {int} y
 * @param {int} direction
 */
π.player.locate = function(x, y, direction) {
  direction = typeof direction === 'number' ? direction : π.direction.PRESERVE;
  π.event.locate(0, x, y, direction);
};

/**
 * Swap position bestween characters
 * @param {int} event_id1
 * @param {int} event_id2
 * @param {int} d1
 * @param {int} d2
 */
π.event.swap = function(event_id1, event_id2, d1, d2) {
  d1 = typeof d1 === 'number' ? d1 : π.direction.PRESERVE;
  d2 = typeof d2 === 'number' ? d2 : π.direction.PRESERVE;
  const character1 = event_id1 > 0 ? $gameMap.event(event_id1) : $gamePlayer;
  const character2 = event_id2 > 0 ? $gameMap.event(event_id2) : $gamePlayer;
  if (character1 && character2) {
    character1.swap(character2);
    character1.setDirection(d1);
    character2.setDirection(d2);
  }
};

/**
 * Swap position bestween characters
 * @param {int} event_id
 * @param {int} d1
 * @param {int} d2
 */
π.event.swap_with_player = function(event_id, d1, d2) {
  d1 = typeof d1 === 'number' ? d1 : π.direction.PRESERVE;
  d2 = typeof d2 === 'number' ? d2 : π.direction.PRESERVE;
  π.event.swap(event_id, 0, d1, d2);
};

/**
 * Swap position bestween characters
 * @param {int} event_id
 * @param {int} d1
 * @param {int} d2
 */
π.player.swap = function(event_id, d1, d2) {
  d1 = typeof d1 === 'number' ? d1 : π.direction.PRESERVE;
  d2 = typeof d2 === 'number' ? d2 : π.direction.PRESERVE;
  π.event.swap(0, event_id, d1, d2);
};

/**
 * Set the vehicle Location
 * @param {int} vehicle_id
 * @param {int} map_id
 * @param {int} x
 * @param {int} y
 */
π.vehicle.locate = function(vehicle_id, map_id, x, y) {
  const vehicle = $gameMap.vehicle(vehicle_id);
  if (vehicle) {
    vehicle.setLocation(map_id, x, y);
  }
};

/**
 * Set the vehicle Location on the map
 * @param {int} vehicle_id
 * @param {int} x
 * @param {int} y
 */
π.vehicle.summon = function(vehicle_id, x, y) {
  π.vehicle.locate(vehicle_id, π.map.id(), x, y);
};

/**
 * Scroll map
 * @param {int} direction
 * @param {int} distance
 * @param {int} speed
 */
π.map.scroll = function(direction, distance, speed) {
  speed = typeof speed == 'number' ? speed : π.scroll.speed.NORMAL;
  if ($gameParty.inBattle()) return;
  $gameMap.startScroll(direction, distance, speed);
  π._tryInterpreter(function(self) {
    return self.setWaitMode('scroll');
  });
};

/**
 * Move event with codes
 * @param {int} event_id
 * @param {array} move_list
 * @param {bool} repeat
 * @param {bool} skippable
 * @param {bool} wait
 */
π.event.move_with = function(event_id, move_list, repeat, skippable, wait) {
  $gameMap.refreshIfNeeded();
  repeat = typeof repeat === 'undefined' ? false : repeat;
  skippable = typeof skippable === 'undefined' ? true : skippable;
  wait = typeof wait === 'undefined' ? false : wait;
  const character = event_id > 0 ? $gameMap.event(event_id) : $gamePlayer;
  if (character) {
    const movements = move_list.map(function(elt) {
      if (typeof elt.code === 'number') {
        return elt;
      }
      return typeof elt === 'number'
        ? { code: elt, parameters: [] }
        : { code: elt[0], parameters: elt[1] };
    });
    const object = {
      list: movements,
      repeat: repeat,
      skippable: skippable,
      wait: wait
    };
    character.forceMoveRoute(object);
    if (wait) {
      π._tryInterpreter(function(self) {
        return self.setWaitMode('route');
      });
    }
  }
};

/**
 * Move player with codes
 * @param {array} move_list
 * @param {bool} repeat
 * @param {bool} skippable
 * @param {bool} wait
 */
π.player.move_with = function(move_list, repeat, skippable, wait) {
  repeat = typeof repeat === 'undefined' ? false : repeat;
  skippable = typeof skippable === 'undefined' ? true : skippable;
  wait = typeof wait === 'undefined' ? false : wait;
  π.event.move_with(0, move_list, repeat, skippable, wait);
};

// Movement

π.route = π.route || {};

/**
 * reference movement [ROUTE_END]
 */
π.route.end = function() {
  return { code: π.event.movement.ROUTE_END, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_DOWN]
 */
π.route.move_down = function() {
  return { code: π.event.movement.ROUTE_MOVE_DOWN, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_LEFT]
 */
π.route.move_left = function() {
  return { code: π.event.movement.ROUTE_MOVE_LEFT, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_RIGHT]
 */
π.route.move_right = function() {
  return { code: π.event.movement.ROUTE_MOVE_RIGHT, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_UP]
 */
π.route.move_up = function() {
  return { code: π.event.movement.ROUTE_MOVE_UP, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_LOWER_L]
 */
π.route.move_lower_l = function() {
  return { code: π.event.movement.ROUTE_MOVE_LOWER_L, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_LOWER_R]
 */
π.route.move_lower_r = function() {
  return { code: π.event.movement.ROUTE_MOVE_LOWER_R, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_UPPER_L]
 */
π.route.move_upper_l = function() {
  return { code: π.event.movement.ROUTE_MOVE_UPPER_L, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_UPPER_R]
 */
π.route.move_upper_r = function() {
  return { code: π.event.movement.ROUTE_MOVE_UPPER_R, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_RANDOM]
 */
π.route.move_random = function() {
  return { code: π.event.movement.ROUTE_MOVE_RANDOM, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_TOWARD]
 */
π.route.move_toward = function() {
  return { code: π.event.movement.ROUTE_MOVE_TOWARD, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_AWAY]
 */
π.route.move_away = function() {
  return { code: π.event.movement.ROUTE_MOVE_AWAY, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_FORWARD]
 */
π.route.move_forward = function() {
  return { code: π.event.movement.ROUTE_MOVE_FORWARD, parameters: [] };
};

/**
 * reference movement [ROUTE_MOVE_BACKWARD]
 */
π.route.move_backward = function() {
  return { code: π.event.movement.ROUTE_MOVE_BACKWARD, parameters: [] };
};

/**
 * reference movement [ROUTE_JUMP]
 */
π.route.jump = function(x, y) {
  return { code: π.event.movement.ROUTE_JUMP, parameters: [x, y] };
};

/**
 * reference movement [ROUTE_WAIT]
 */
π.route.wait = function(duration) {
  return { code: π.event.movement.ROUTE_WAIT, parameters: [duration] };
};

/**
 * reference movement [ROUTE_TURN_DOWN]
 */
π.route.turn_down = function() {
  return { code: π.event.movement.ROUTE_TURN_DOWN, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_LEFT]
 */
π.route.turn_left = function() {
  return { code: π.event.movement.ROUTE_TURN_LEFT, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_RIGHT]
 */
π.route.turn_right = function() {
  return { code: π.event.movement.ROUTE_TURN_RIGHT, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_UP]
 */
π.route.turn_up = function() {
  return { code: π.event.movement.ROUTE_TURN_UP, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_90D_R]
 */
π.route.turn_90d_r = function() {
  return { code: π.event.movement.ROUTE_TURN_90D_R, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_90D_L]
 */
π.route.turn_90d_l = function() {
  return { code: π.event.movement.ROUTE_TURN_90D_L, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_180D]
 */
π.route.turn_180d = function() {
  return { code: π.event.movement.ROUTE_TURN_180D, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_90D_R_L]
 */
π.route.turn_90d_r_l = function() {
  return { code: π.event.movement.ROUTE_TURN_90D_R_L, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_RANDOM]
 */
π.route.turn_random = function() {
  return { code: π.event.movement.ROUTE_TURN_RANDOM, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_TOWARD]
 */
π.route.turn_toward = function() {
  return { code: π.event.movement.ROUTE_TURN_TOWARD, parameters: [] };
};

/**
 * reference movement [ROUTE_TURN_AWAY]
 */
π.route.turn_away = function() {
  return { code: π.event.movement.ROUTE_TURN_AWAY, parameters: [] };
};

/**
 * reference movement [ROUTE_SWITCH_ON]
 */
π.route.switch_on = function(switch_id) {
  return { code: π.event.movement.ROUTE_SWITCH_ON, parameters: [switch_id] };
};

/**
 * reference movement [ROUTE_SWITCH_OFF]
 */
π.route.switch_off = function(switch_id) {
  return { code: π.event.movement.ROUTE_SWITCH_OFF, parameters: [switch_id] };
};

/**
 * reference movement [ROUTE_CHANGE_SPEED]
 */
π.route.change_speed = function(new_speed) {
  return { code: π.event.movement.ROUTE_CHANGE_SPEED, parameters: [new_speed] };
};

/**
 * reference movement [ROUTE_CHANGE_FREQ]
 */
π.route.change_freq = function(new_freq) {
  return { code: π.event.movement.ROUTE_CHANGE_FREQ, parameters: [new_freq] };
};

/**
 * reference movement [ROUTE_WALK_ANIME_ON]
 */
π.route.walk_anime_on = function() {
  return { code: π.event.movement.ROUTE_WALK_ANIME_ON, parameters: [] };
};

/**
 * reference movement [ROUTE_WALK_ANIME_OFF]
 */
π.route.walk_anime_off = function() {
  return { code: π.event.movement.ROUTE_WALK_ANIME_OFF, parameters: [] };
};

/**
 * reference movement [ROUTE_STEP_ANIME_ON]
 */
π.route.step_anime_on = function() {
  return { code: π.event.movement.ROUTE_STEP_ANIME_ON, parameters: [] };
};

/**
 * reference movement [ROUTE_STEP_ANIME_OFF]
 */
π.route.step_anime_off = function() {
  return { code: π.event.movement.ROUTE_STEP_ANIME_OFF, parameters: [] };
};

/**
 * reference movement [ROUTE_DIR_FIX_ON]
 */
π.route.dir_fix_on = function() {
  return { code: π.event.movement.ROUTE_DIR_FIX_ON, parameters: [] };
};

/**
 * reference movement [ROUTE_DIR_FIX_OFF]
 */
π.route.dir_fix_off = function() {
  return { code: π.event.movement.ROUTE_DIR_FIX_OFF, parameters: [] };
};

/**
 * reference movement [ROUTE_THROUGH_ON]
 */
π.route.through_on = function() {
  return { code: π.event.movement.ROUTE_THROUGH_ON, parameters: [] };
};

/**
 * reference movement [ROUTE_THROUGH_OFF]
 */
π.route.through_off = function() {
  return { code: π.event.movement.ROUTE_THROUGH_OFF, parameters: [] };
};

/**
 * reference movement [ROUTE_TRANSPARENT_ON]
 */
π.route.transparent_on = function() {
  return { code: π.event.movement.ROUTE_TRANSPARENT_ON, parameters: [] };
};

/**
 * reference movement [ROUTE_TRANSPARENT_OFF]
 */
π.route.transparent_off = function() {
  return { code: π.event.movement.ROUTE_TRANSPARENT_OFF, parameters: [] };
};

/**
 * reference movement [ROUTE_CHANGE_IMAGE]
 */
π.route.change_image = function(charset, index) {
  return {
    code: π.event.movement.ROUTE_CHANGE_IMAGE,
    parameters: [charset, index]
  };
};

/**
 * reference movement [ROUTE_CHANGE_OPACITY]
 */
π.route.change_opacity = function(new_opacity) {
  return {
    code: π.event.movement.ROUTE_CHANGE_OPACITY,
    parameters: [new_opacity]
  };
};

/**
 * reference movement [ROUTE_CHANGE_BLEND_MODE]
 */
π.route.change_blend_mode = function(new_blend_mode) {
  return {
    code: π.event.movement.ROUTE_CHANGE_BLEND_MODE,
    parameters: [new_blend_mode]
  };
};

/**
 * reference movement [ROUTE_PLAY_SE]
 */
π.route.play_se = function(sound) {
  return { code: π.event.movement.ROUTE_PLAY_SE, parameters: [sound] };
};

/**
 * reference movement [ROUTE_SCRIPT]
 */
π.route.script = function(script_content) {
  return { code: π.event.movement.ROUTE_SCRIPT, parameters: [script_content] };
};

/**
 * Get in or Get out
 */
π.vehicle.toggle = function() {
  $gamePlayer.getOnOffVehicle();
};

/**
 * Set transparancy of an event
 * @param {int} event_id
 * @param {bool} value
 */
π.event.transparent = function(event_id, value) {
  const character = event_id > 0 ? $gameMap.event(event_id) : $gamePlayer;
  if (character) {
    if (typeof value === 'boolean') {
      character.setTransparent(value);
    }
    return character.isTransparent();
  }
};

/**
 * Set transparancy of the player
 * @param {bool} value
 */
π.player.transparent = function(value) {
  return typeof value === 'undefined'
    ? π.event.transparent(0)
    : π.event.transparent(0, value);
};

/**
 * Show followers
 */
π.followers.show = function() {
  $gamePlayer.showFollowers();
  $gamePlayer.refresh();
};

/**
 * Hide followers
 */
π.followers.hide = function() {
  $gamePlayer.hideFollowers();
  $gamePlayer.refresh();
};

/**
 * Gather followers
 */
π.followers.gather = function() {
  if ($gameParty.inBattle()) return;
  $gamePlayer.gatherFollowers();
  π._tryInterpreter(function(self) {
    return self.setWaitMode('gather');
  });
};

/**
 * Show animation on event
 * @param {int} event_id
 * @param {int} animation_id
 * @param {bool} wait
 */
π.event.animation_on = function(event_id, animation_id, wait) {
  wait = typeof wait === 'boolean' ? wait : false;
  const character = event_id > 0 ? $gameMap.event(event_id) : $gamePlayer;
  if (character) {
    character.requestAnimation(animation_id);
    if (wait) {
      π._tryInterpreter(function(self) {
        self._character = character;
        return self.setWaitMode('animation');
      });
    }
  }
};

/**
 * Show animation on player
 * @param {int} animation_id
 * @param {bool} wait
 */
π.player.animation_on = function(animation_id, wait) {
  wait = typeof wait === 'boolean' ? wait : false;
  π.event.animation_on(0, animation_id, wait);
};

/**
 * Show balloon on event
 * @param {int} event_id
 * @param {int} balloon_id
 * @param {bool} wait
 */
π.event.balloon_on = function(event_id, balloon_id, wait) {
  wait = typeof wait === 'boolean' ? wait : false;
  const character = event_id > 0 ? $gameMap.event(event_id) : $gamePlayer;
  if (character) {
    character.requestBalloon(balloon_id);
    if (wait) {
      π._tryInterpreter(function(self) {
        self._character = character;
        return self.setWaitMode('animation');
      });
    }
  }
};

/**
 * Show balloon on player
 * @param {int} balloon_id
 * @param {bool} wait
 */
π.player.balloon_on = function(balloon_id, wait) {
  wait = typeof wait === 'boolean' ? wait : false;
  π.event.balloon_on(0, balloon_id, wait);
};

/**
 * Erase Event
 * @param {int} event_id
 */
π.event.erase = function(event_id) {
  const character = $gameMap.event(event_id);
  if (character && event_id > 0) {
    $gameMap.eraseEvent(event_id);
  }
};

/**
 * Wait for x frames
 * @param {int} frames
 */
π.time.wait = function(frames) {
  π._tryInterpreter(function(self) {
    self.wait(frames);
  });
};

/**
 * Wait for x seconds
 * @param {int} seconds
 */
π.time.wait_seconds = function(seconds) {
  π.time.wait(seconds * 60);
};

// Presaved tone
π.tone.normal = function() {
  return π.tone.make(0, 0, 0, 0);
};

π.tone.dark = function() {
  return π.tone.make(-68, -68, -68, 0);
};

π.tone.sepia = function() {
  return π.tone.make(34, -34, -68, 170);
};

π.tone.sunset = function() {
  return π.tone.make(68, -34, -34, 170);
};

π.tone.night = function() {
  return π.tone.make(-68, -68, 0, 68);
};

π.color.make = function(r, g, b, i) {
  i = typeof i === 'undefined' ? 255 : i;
  return [r, g, b, i];
};

π.color.red = function(i) {
  i = typeof i === 'undefined' ? 255 : i;
  return π.color.make(255, 0, 0, i);
};

π.color.green = function(i) {
  i = typeof i === 'undefined' ? 255 : i;
  return π.color.make(0, 255, 0, i);
};

π.color.blue = function(i) {
  i = typeof i === 'undefined' ? 255 : i;
  return π.color.make(0, 0, 255, i);
};

/**
 * Fade out the screen
 */
π.screen.fade_out = function() {
  if ($gameMessage.isBusy()) return;
  $gameScreen.startFadeOut(24);
  π._tryInterpreter(function(self) {
    self.wait(24);
  });
};

/**
 * Fade in the screen
 */
π.screen.fade_in = function() {
  if ($gameMessage.isBusy()) return;
  $gameScreen.startFadeIn(24);
  π._tryInterpreter(function(self) {
    self.wait(24);
  });
};

/**
 * Tint the screen
 * @param {int} duration
 * @param {tone} tone
 * @param {bool} wait
 */
π.screen.tint = function(tone, duration, wait) {
  duration = typeof duration === 'number' ? duration : 0;
  wait = typeof wait === 'boolean' ? wait : false;
  $gameScreen.startTint(tone, duration);
  if (wait) {
    π._tryInterpreter(function(self) {
      self.wait(duration);
    });
  }
};

/**
 * Flash the screen
 * @param {color} color
 * @param {int} duration
 * @param {bool} wait
 */
π.screen.flash = function(color, duration, wait) {
  duration = typeof duration === 'number' ? duration : 0;
  wait = typeof wait === 'boolean' ? wait : false;
  $gameScreen.startFlash(color, duration);
  if (wait) {
    π._tryInterpreter(function(self) {
      self.wait(duration);
    });
  }
};

/**
 * Shake the screen
 * @param {int} power
 * @param {int} speed
 * @param {int} duration
 * @param {bool} wait
 */
π.screen.shake = function(power, speed, duration, wait) {
  power = Math.abs(power);
  speed = Math.abs(speed);
  duration = typeof duration === 'number' ? duration : 0;
  wait = typeof wait === 'boolean' ? wait : false;
  $gameScreen.startShake(power, speed, duration);
  if (wait) {
    π._tryInterpreter(function(self) {
      self.wait(duration);
    });
  }
};

/**
 * Start weather
 * @param {string} weather_type
 * @param {int} strength
 * @param {int} duration
 * @param {bool} wait
 */
π.weather.start = function(weather_type, strength, duration, wait) {
  duration = typeof duration === 'number' ? duration : 0;
  wait = typeof wait === 'boolean' ? wait : false;
  if ($gameParty.inBattle()) return;
  $gameScreen.changeWeather(weather_type, strength, duration);
  if (wait) {
    π._tryInterpreter(function(self) {
      self.wait(duration);
    });
  }
};

/**
 * Start BGM
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.bgm.play = function(name, volume, pitch, pan) {
  volume = typeof volume === 'undefined' ? 100 : volume;
  pitch = typeof pitch === 'undefined' ? 100 : pitch;
  pan = typeof pan === 'undefined' ? 0 : pan;
  const object = {
    name: name,
    pan: pan,
    volume: volume,
    pitch: pitch
  };
  AudioManager.playBgm(object);
};

/**
 * Link battle BGM
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.battle.bgm = function(name, volume, pitch, pan) {
  volume = typeof volume === 'undefined' ? 100 : volume;
  pitch = typeof pitch === 'undefined' ? 100 : pitch;
  pan = typeof pan === 'undefined' ? 0 : pan;
  const object = {
    name: name,
    pan: pan,
    volume: volume,
    pitch: pitch
  };
  $gameSystem.setBattleBgm(object);
};

/**
 * Stop BGM
 * @param {int} duration
 */
π.bgm.fade_out = function(duration) {
  AudioManager.fadeOutBgm(duration);
};

/**
 * Stop BGM
 * @param {int} duration
 */
π.bgm.fade_out_frames = function(duration) {
  π.bgm.fade_out(duration / 60);
};

/**
 * Stop BGM
 */
π.bgm.stop = function() {
  AudioManager.stopBgm();
};

/**
 * Save BGM
 */
π.bgm.save = function() {
  $gameSystem.saveBgm();
};

/**
 * Replay BGM
 */
π.bgm.resume = function() {
  $gameSystem.replayBgm();
};

/**
 * Start BGS
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.bgs.play = function(name, volume, pitch, pan) {
  volume = typeof volume === 'undefined' ? 100 : volume;
  pitch = typeof pitch === 'undefined' ? 100 : pitch;
  pan = typeof pan === 'undefined' ? 0 : pan;
  const object = {
    name: name,
    pan: pan,
    volume: volume,
    pitch: pitch
  };
  AudioManager.playBgs(object);
};

/**
 * Stop BGS
 * @param {int} duration
 */
π.bgs.fade_out = function(duration) {
  AudioManager.fadeOutBgs(duration);
};

/**
 * Stop BGS
 * @param {int} duration
 */
π.bgs.fade_out_frames = function(duration) {
  π.bgs.fade_out(duration / 60);
};

/**
 * Stop BGS
 */
π.bgs.stop = function() {
  AudioManager.stopBgs();
};

/**
 * Start ME
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.me.play = function(name, volume, pitch, pan) {
  volume = typeof volume === 'undefined' ? 100 : volume;
  pitch = typeof pitch === 'undefined' ? 100 : pitch;
  pan = typeof pan === 'undefined' ? 0 : pan;
  const object = {
    name: name,
    pan: pan,
    volume: volume,
    pitch: pitch
  };
  AudioManager.playMe(object);
};

π.battle.me = π.battle.me || {};

/**
 * Set Victory ME
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.battle.me.victory = function(name, volume, pitch, pan) {
  volume = typeof volume === 'undefined' ? 100 : volume;
  pitch = typeof pitch === 'undefined' ? 100 : pitch;
  pan = typeof pan === 'undefined' ? 0 : pan;
  const object = {
    name: name,
    pan: pan,
    volume: volume,
    pitch: pitch
  };
  $gameSystem.setVictoryMe(object);
};

/**
 * Set Defeat ME
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.battle.me.defeat = function(name, volume, pitch, pan) {
  volume = typeof volume === 'undefined' ? 100 : volume;
  pitch = typeof pitch === 'undefined' ? 100 : pitch;
  pan = typeof pan === 'undefined' ? 0 : pan;
  const object = {
    name: name,
    pan: pan,
    volume: volume,
    pitch: pitch
  };
  $gameSystem.setDefeatMe(object);
};

/**
 * Set Vehicle BGM
 * @param {int} vehicle_id
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.vehicle.bgm = function(vehicle_id, name, volume, pitch, pan) {
  const vehicle = $gameMap.vehicle(vehicle_id);
  if (vehicle) {
    volume = typeof volume === 'undefined' ? 100 : volume;
    pitch = typeof pitch === 'undefined' ? 100 : pitch;
    pan = typeof pan === 'undefined' ? 0 : pan;
    const object = {
      name: name,
      pan: pan,
      volume: volume,
      pitch: pitch
    };
    vehicle.setBgm(object);
  }
};

/**
 * Stop ME
 * @param {int} duration
 */
π.me.fade_out = function(duration) {
  AudioManager.fadeOutMe(duration);
};

/**
 * Stop ME
 * @param {int} duration
 */
π.me.fade_out_frames = function(duration) {
  π.me.fade_out(duration / 60);
};

/**
 * Stop ME
 */
π.me.stop = function() {
  AudioManager.stopMe();
};

/**
 * Start SE
 * @param {string} name
 * @param {int} volume
 * @param {int} pitch
 * @param {int} pan
 */
π.se.play = function(name, volume, pitch, pan) {
  volume = typeof volume === 'undefined' ? 100 : volume;
  pitch = typeof pitch === 'undefined' ? 100 : pitch;
  pan = typeof pan === 'undefined' ? 0 : pan;
  const object = {
    name: name,
    pan: pan,
    volume: volume,
    pitch: pitch
  };
  AudioManager.playSe(object);
};

/**
 * Stop ME
 * @param {int} duration
 */
π.se.fade_out = function(duration) {
  AudioManager.fadeOutSe(duration);
};

/**
 * Stop ME
 * @param {int} duration
 */
π.se.fade_out_frames = function(duration) {
  π.se.fade_out(duration / 60);
};

/**
 * Stop ME
 */
π.se.stop = function() {
  AudioManager.stopSe();
};

/**
 * Play Vidéo
 * @param {string} file
 */
π.video.play = function(file) {
  file = typeof file === 'string' ? file : '';
  if ($gameMessage.isBusy() || file.length <= 0) return;
  const ext =
    Graphics.canPlayVideoType('video/webm') && !Utils.isMobileDevice()
      ? '.webm'
      : '.mp4';
  Graphics.playVideo(`movies/${file}${ext}`);
  π._tryInterpreter(function(self) {
    return self.setWaitMode('video');
  });
};

/**
 * Start a battle
 * @param {int} troop_id
 * @param {bool} can_escape
 * @param {bool} can_lose
 */
π.battle.start_versus = function(troop_id, can_escape, can_lose) {
  if ($gameParty.inBattle()) return;
  can_escape = typeof can_escape === 'undefined' ? true : can_escape;
  can_lose = typeof can_lose === 'undefined' ? true : can_lose;
  if ($dataTroops[troop_id]) {
    BattleManager.setup(troop_id, can_escape, can_lose);
    BattleManager.setEventCallback(function(i) {
      BattleManager.PICO.last_statement = i;
    });
    $gamePlayer.makeEncounterCount();
    SceneManager.push(Scene_Battle);
  }
};

/**
 * Start a battle
 * @param {bool} can_escape
 * @param {bool} can_lose
 */
π.battle.start = function(can_escape, can_lose) {
  const troop_id = $gamePlayer.makeEncounterTroopId();
  can_escape = typeof can_escape === 'undefined' ? true : can_escape;
  can_lose = typeof can_lose === 'undefined' ? true : can_lose;
  π.battle.start_versus(troop_id, can_escape, can_lose);
};

/**
 * Get the result of the last battle
 */
π.battle.result = function() {
  return BattleManager.PICO.last_statement;
};

// Helpers to manage battle 's result

π.battle.victory = function() {
  return BattleManager.PICO.last_statement === π.battle.VICTORY;
};

π.battle.escape = function() {
  return BattleManager.PICO.last_statement === π.battle.ESCAPE;
};

π.battle.defeat = function() {
  return BattleManager.PICO.last_statement === π.battle.DEFEAT;
};

/**
 * Item
 * @param {int} id_of_item
 * @param {int} free_price
 */
π.shop.item = function(item_id, free_price) {
  free_price = typeof free_price === 'number' ? free_price : 0;
  const label = free_price > 0 ? 1 : 0;
  return [0, item_id, label, free_price];
};

/**
 * Weapon
 * @param {int} id_of_item
 * @param {int} free_price
 */
π.shop.weapon = function(weapon_id, free_price) {
  free_price = typeof free_price === 'number' ? free_price : 0;
  const label = free_price > 0 ? 1 : 0;
  return [1, weapon_id, label, free_price];
};

/**
 * Armor
 * @param {int} id_of_item
 * @param {int} free_price
 */
π.shop.armor = function(armor_id, free_price) {
  free_price = typeof free_price === 'number' ? free_price : 0;
  const label = free_price > 0 ? 1 : 0;
  return [2, armor_id, label, free_price];
};

/**
 * Open shop
 * @param {array} goods
 * @param {bool} allow_sales
 */
π.shop.open = function(goods, allow_sales) {
  if ($gameParty.inBattle()) return;
  allow_sales = typeof allow_sales === 'boolean' ? allow_sales : true;
  SceneManager.push(Scene_Shop);
  SceneManager.prepareNextScene(goods, !allow_sales);
};

/**
 * Open Name processing
 * @param {int} actor_id
 * @param {int} limit
 */
π.actor.input_name = function(actor_id, limit) {
  if ($gameParty.inBattle()) return;
  limit = typeof limit === 'number' ? limit : 8;
  const actor = $dataActors[actor_id];
  if (actor) {
    SceneManager.push(Scene_Name);
    SceneManager.prepareNextScene(actor_id, limit);
  }
};

/**
 * Open menu
 */
π.menu.open = function() {
  if ($gameParty.inBattle()) return;
  SceneManager.push(Scene_Menu);
  Window_MenuCommand.initCommandPosition();
};

/**
 * Open save menu
 */
π.save.open = function() {
  if ($gameParty.inBattle()) return;
  SceneManager.push(Scene_Save);
};

/**
 * Open load menu
 */
π.load.open = function() {
  if ($gameParty.inBattle()) return;
  SceneManager.push(Scene_Load);
};

/**
 * Open Game Over
 */
π.scene.game_over = function() {
  SceneManager.goto(Scene_Gameover);
};

/**
 * Open Title Scene
 */
π.scene.title = function() {
  SceneManager.goto(Scene_Title);
};

/**
 * Disable save access
 */
π.save.disable = function() {
  $gameSystem.disableSave();
};

/**
 * Enable save access
 */
π.save.enable = function() {
  $gameSystem.enableSave();
};

/**
 * Check if save access si allowed
 */
π.save.enabled = function() {
  return $gameSystem.isSaveEnabled();
};

/**
 * Disable menu access
 */
π.menu.disable = function() {
  $gameSystem.disableMenu();
};

/**
 * Enable menu access
 */
π.menu.enable = function() {
  $gameSystem.enableMenu();
};

/**
 * Check if menu access si allowed
 */
π.menu.enabled = function() {
  return $gameSystem.isMenuEnabled();
};

π.battle.encounter = π.battle.encounter || {};

/**
 * Enable encounter
 */
π.battle.encounter.enable = function() {
  $gameSystem.enableEncounter();
  $gamePlayer.makeEncounterCount();
};

/**
 * Disable encounter
 */
π.battle.encounter.disable = function() {
  $gameSystem.disableEncounter();
  $gamePlayer.makeEncounterCount();
};

/**
 * Check if encounter is enabled
 */
π.battle.encounter.enabled = function() {
  return $gameSystem.isEncounterEnabled();
};

π.menu.formation = π.menu.formation || {};

/**
 * Enable formation access
 */
π.menu.formation.enable = function() {
  $gameSystem.enableFormation();
};

/**
 * Disable formation access
 */
π.menu.formation.disable = function() {
  $gameSystem.disableFormation();
};

/**
 * Check if formation accesss is enabled
 */
π.menu.formation.enabled = function() {
  return $gameSystem.isFormationEnabled();
};

/**
 * Change Window tone
 * @param {tone} tone
 */
π.system.window_tone = function(tone) {
  if (typeof tone !== 'undefined') {
    $gameSystem.setWindowTone(tone);
  }
  return $gameSystem.windowTone();
};

/**
 * Change the charset file
 * @param {int} actor_id
 * @param {string} new_charset
 */
π.actor.charset = function(actor_id, new_charset) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof new_charset === 'string') {
      actor.setCharacterImage(new_charset, 0);
      $gamePlayer.refresh();
    }
    return actor.characterName();
  }
};

/**
 * Change the faceset file
 * @param {int} actor_id
 * @param {string} new_faceset
 */
π.actor.faceset = function(actor_id, new_faceset) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof new_faceset === 'string') {
      actor.setFaceImage(new_faceset, 0);
      $gamePlayer.refresh();
    }
    return actor.faceName();
  }
};

/**
 * Change the faceset index
 * @param {int} actor_id
 * @param {int} new_index
 */
π.actor.faceset_index = function(actor_id, new_index) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof new_index === 'number') {
      const faceset = π.actor.faceset(actor_id);
      actor.setFaceImage(faceset, new_index);
      $gamePlayer.refresh();
    }
    return actor.faceIndex();
  }
};

/**
 * Change the charset index
 * @param {int} actor_id
 * @param {int} new_index
 */
π.actor.charset_index = function(actor_id, new_index) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof new_index === 'number') {
      const charset = π.actor.charset(actor_id);
      actor.setCharacterImage(charset, new_index);
      $gamePlayer.refresh();
    }
    return actor.characterIndex();
  }
};

/**
 * Change the apparence
 * @param {int} actor_id
 * @param {string} new_charset
 * @param {int} new_index
 */
π.actor.character = function(actor_id, new_charset, new_index) {
  const actor = $gameActors.actor(actor_id);
  new_index = typeof new_index === 'undefined' ? 0 : new_index;
  if (actor) {
    if (typeof new_charset === 'string' && typeof new_index === 'number') {
      actor.setCharacterImage(new_charset, new_index);
      $gamePlayer.refresh();
    }
  }
};

/**
 * Change the face apparence
 * @param {int} actor_id
 * @param {string} new_faceset
 * @param {int} new_index
 */
π.actor.face = function(actor_id, new_faceset, new_index) {
  const actor = $gameActors.actor(actor_id);
  new_index = typeof new_index === 'undefined' ? 0 : new_index;
  if (actor) {
    if (typeof new_faceset === 'string' && typeof new_index === 'number') {
      actor.setFaceImage(new_faceset, new_index);
      $gamePlayer.refresh();
    }
  }
};

/**
 * Change the battler file
 * @param {int} actor_id
 * @param {string} new_battler
 */
π.actor.battler = function(actor_id, new_battler) {
  const actor = $gameActors.actor(actor_id);
  if (actor) {
    if (typeof new_battler === 'string') {
      actor.setBattlerImage(new_battler);
      $gamePlayer.refresh();
    }
    return actor.battlerName();
  }
};

/**
 * Change the charset file
 * @param {int} vehicle_id
 * @param {string} new_charset
 */
π.vehicle.charset = function(vehicle_id, new_charset) {
  const vehicle = $gameMap.vehicle(vehicle_id);
  if (vehicle) {
    if (typeof new_charset === 'string') {
      vehicle.setImage(new_charset, 0);
      $gamePlayer.refresh();
    }
    return vehicle.characterName();
  }
};

/**
 * Change the charset index
 * @param {int} vehicle_id
 * @param {int} new_index
 */
π.vehicle.charset_index = function(vehicle_id, new_index) {
  const vehicle = $gameMap.vehicle(vehicle_id);
  if (vehicle) {
    if (typeof new_index === 'number') {
      const charset = π.vehicle.charset(vehicle_id);
      vehicle.setImage(charset, new_index);
      $gamePlayer.refresh();
    }
    return vehicle.characterIndex();
  }
};

/**
 * Change the apparence
 * @param {int} vehicle_id
 * @param {string} new_charset
 * @param {int} new_index
 */
π.vehicle.character = function(vehicle_id, new_charset, new_index) {
  const vehicle = $gameMap.vehicle(vehicle_id);
  new_index = typeof new_index === 'undefined' ? 0 : new_index;
  if (vehicle) {
    if (typeof new_charset === 'string' && typeof new_index === 'number') {
      vehicle.setImage(new_charset, new_index);
      $gamePlayer.refresh();
    }
  }
};

/**
 * Enable Map#displayName
 */
π.map.enable_display_name = function() {
  $gameMap.enableNameDisplay();
};

/**
 * Disable Map#displayName
 */
π.map.enable_display_name = function() {
  $gameMap.disableNameDisplay();
};

/**
 * Check if the displayName is enabled
 */
π.map.enabled_display_name = function() {
  return $gameMap.isNameDisplayEnabled();
};

/**
 * Change the tileset
 * @param {int} tileset_id
 */
π.map.swap_tileset = function(tileset_id) {
  const tileset = $dataTilesets[tileset_id];
  if (!tileset) return;
  return π._performSideEffect(function(self) {
    if (!self._imageReservationId) {
      self._imageReservationId = Utils.generateRuntimeId();
    }
    const ready = tileset.tilesetNames
      .map(function(name) {
        return ImageManager.reserveTileset(name, 0, self._imageReservationId);
      }, self)
      .every(function(bitmap) {
        return bitmap.isReady();
      });
    if (ready) {
      $gameMap.changeTileset(tileset_id);
      ImageManager.releaseReservation(self._imageReservationId);
      self._imageReservationId = null;
      return true;
    }
    return false;
  });
};

/**
 * Change Battleback1
 * @param {string} battleback
 */
π.map.battleback1 = function(new_battleback) {
  if (typeof new_battleback === 'string') {
    this._battleback1Name = new_battleback;
  }
  return $gameMap._battleback1Name;
};

/**
 * Change Battleback2
 * @param {string} battleback
 */
π.map.battleback2 = function(new_battleback) {
  if (typeof new_battleback === 'string') {
    this._battleback2Name = new_battleback;
  }
  return $gameMap._battleback2Name;
};

/**
 * Change Battlebacks
 * @param {string} battleback1
 * @param {string} battleback2
 */
π.map.battleback = function(b1, b2) {
  b1 = typeof b1 === 'undefined' ? '' : b1;
  b2 = typeof b2 === 'undefined' ? '' : b2;
  $gameMap.changeBattleback(b1, b2);
};

/**
 * Change parallax
 * @param {string} new_parallax
 */
π.map.parallax.name = function(new_parallax) {
  if (typeof new_parallax === 'string') {
    $gameMap._parallaxName = new_parallax;
    $gameMap._parallaxZero = ImageManager.isZeroParallax(new_parallax);
  }
  return $gameMap._parallaxName;
};

/**
 * Change parallax loop x
 * @param {bool} is_loop
 */
π.map.parallax.loop_x = function(is_loop) {
  if (typeof is_loop === 'boolean') {
    if ($gameMap._parallaxLoopX && !is_loop) {
      $gameMap._parallaxX = 0;
    }
    $gameMap._parallaxLoopX = is_loop;
  }
  return $gameMap._parallaxLoopX;
};

/**
 * Change parallax loop y
 * @param {bool} is_loop
 */
π.map.parallax.loop_y = function(is_loop) {
  if (typeof is_loop === 'boolean') {
    if ($gameMap._parallaxLoopY && !is_loop) {
      $gameMap._parallaxY = 0;
    }
    $gameMap._parallaxLoopY = is_loop;
  }
  return $gameMap._parallaxLoopY;
};

/**
 * Change parallax speed x
 * @param {int} speed
 */
π.map.parallax.speed_x = function(speed) {
  if (typeof speed === 'number') {
    $gameMap._parallaxSx = speed;
  }
  return $gameMap._parallaxSx;
};

/**
 * Change parallax speed y
 * @param {int} speed
 */
π.map.parallax.speed_y = function(speed) {
  if (typeof speed === 'number') {
    $gameMap._parallaxSy = speed;
  }
  return $gameMap._parallaxSy;
};

/**
 * Change parallax
 * @param {string} new_parallax
 * @param {bool} is_loop_x
 * @param {int} speed_x
 * @param {bool} is_loop_y
 * @param {int} speed_y
 */
π.map.parallax.change = function(name, loop_x, speed_x, loop_y, speed_y) {
  loop_x = typeof loop_x === 'undefined' ? false : loop_x;
  loop_y = typeof loop_y === 'undefined' ? false : loop_y;
  speed_x = typeof speed_x === 'undefined' ? 0 : speed_x;
  speed_y = typeof speed_y === 'undefined' ? 0 : speed_y;
  $gameMap.changeParallax(name, loop_x, loop_x, speed_x, speed_y);
};

/**
 * Get the terrain tag by coord
 * @param {int} x
 * @param {int} y
 */
π.map.terrain_tag = function(x, y) {
  return $gameMap.terrainTag(x, y);
};

/**
 * Get the region ID by coord
 * @param {int} x
 * @param {int} y
 */
π.map.region_id = function(x, y) {
  return $gameMap.regionId(x, y);
};

/**
 * Get the tile ID by coord
 * @param {int} x
 * @param {int} y
 * @param {int} layer
 */
π.map.tile_id = function(x, y, layer) {
  layer = typeof layer === 'undefined' ? π.map.LAYER1 : layer;
  return $gameMap.tileId(x, y, layer);
};

/**
 * Get the event ID by coord
 * @param {int} x
 * @param {int} y
 */
π.event.at = function(x, y) {
  const result = $gameMap.eventIdXy(x, y);
  return result === 0 ? null : result;
};

/**
 * Patch for game choice
 */
Game_Message.prototype.picoLastChoice = null;
BattleManager.PICO = BattleManager.PICO || {};
BattleManager.PICO.last_statement = null;
