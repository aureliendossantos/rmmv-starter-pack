'use strict';

/*:
 * @plugindesc Plugin Pictures for πco
 *
 * @author grm <grimfw@gmail.com>
 *
 * License MIT
 */

// Check dependencies betweens plugins
if (typeof π === 'undefined') throw 'Core is not installed';
π.core.require([[π.core.version, '>= 1.0.2-dev']]);

// The core of the script
π.picture = {
  version: '1.0.0-dev'
};

π.picture._get = function(id) {
  return $gameScreen.picture(id);
};

/**
 * Public API
 */

/**
 * Show a picture
 * @param {int} id the id of the picture
 * @param {string} name the name of the picture
 * @param {int} x the x-coord of the picture
 * @param {int} y the y-coord of the picture
 * @param {origin} origin the origin of the picture
 */
π.picture.show = function(id, name, x, y, origin) {
  x = typeof x === 'undefined' ? 0 : x;
  y = typeof y === 'undefined' ? 0 : y;
  origin = typeof origin === 'undefined' ? 0 : origin;
  $gameScreen.showPicture(id, name, origin, x, y, 100, 100, 255, 0);
};

/**
 * Erase a picture
 * @param {int} id the id of the picture
 */
π.picture.erase = function(id) {
  $gameScreen.erasePicture(id);
};

/**
 * Access or mutate x-coord of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the x-coord
 */
π.picture.x = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._x = value;
  }
  return picture.x();
};

/**
 * Access or mutate y-coord of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the y-coord
 */
π.picture.y = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._y = value;
  }
  return picture.y();
};

/**
 * Access or mutate the origin of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the origin
 */
π.picture.origin = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._origin = value;
  }
  return picture.origin();
};

/**
 * Access or mutate the scale_x of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the scale_x
 */
π.picture.scale_x = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._scaleX = value;
  }
  return picture.scaleX();
};

/**
 * Access or mutate the scale_y of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the scale_y
 */
π.picture.scale_y = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._scaleY = value;
  }
  return picture.scaleY();
};

/**
 * Access or mutate the opacity of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the opacity
 */
π.picture.opacity = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._opacity = value;
  }
  return picture.opacity();
};

/**
 * Access or mutate the blend mode of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the blend mode
 */
π.picture.blend_mode = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._blendMode = value;
  }
  return picture.blendMode();
};

/**
 * Access or mutate the angle of the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the angle
 */
π.picture.angle = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._angle = value;
  }
  return picture.angle();
};

/**
 * Access or mutate the rotation speed the picture
 * @param {int} id the id of the picture
 * @param {int} value if defined, set the new value of the speed
 */
π.picture.rotation_speed = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._rotationSpeed = value;
  }
  return picture._rotationSpeed;
};

/**
 * Access or mutate the tone of the picture
 * @param {int} id the id of the picture
 * @param {tone}} value if defined, set the new value of the tone
 */
π.picture.tone = function(id, value) {
  const picture = π.picture._get(id);
  if (typeof value !== 'undefined') {
    picture._tone = value;
  }
  return picture.tone();
};

/**
 * Move a picture
 * @param {int} id the id of the picture
 * @param {int} duration the movement duration
 * @param {int} x the x-coord of the picture
 * @param {int} y the y-coord of the picture
 * @param {int} scaleX if defined, set the new value of the scale_x
 * @param {int} scaleY if defined, set the new value of the scale_y
 * @param {int} opacity if defined, set the new value of the opacity
 * @param {int} blendMode if defined, set the new value of the blend mode
 */
π.picture.move = function(
  id,
  duration,
  x,
  y,
  scaleX,
  scaleY,
  opacity,
  blendMode
) {
  const picture = π.picture._get(id);
  const origin = picture.origin();
  x = typeof x === 'undefined' || x === π.noOp ? picture.x() : x;
  y = typeof y === 'undefined' || y === π.noOp ? picture.y() : y;
  scaleX =
    typeof scaleX === 'undefined' || scaleX === π.noOp
      ? picture.scaleX()
      : scaleX;
  scaleY =
    typeof scaleY === 'undefined' || scaleY === π.noOp
      ? picture.scaleY()
      : scaleY;
  opacity =
    typeof opacity === 'undefined' || opacity === π.noOp
      ? picture.opacity()
      : opacity;

  blendMode =
    typeof blendMode === 'undefined' || blendMode === π.noOp
      ? picture.blendMode()
      : blendMode;
  picture.move(origin, x, y, scaleX, scaleY, opacity, blendMode, duration);
};

π.picture.tint = function(id, duration, tone) {
  $gameScreen.tintPicture(id, tone, duration);
};

/**
 * Rotate (with a speed) a picture
 * @param {int} speed the rotation's speed
 */
π.picture.rotate = function(id, speed) {
  $gameScreen.rotatePicture(id, speed);
};

/**
 * Patch for picture
 */

const PICO_Picture_updateOrigin = Sprite_Picture.prototype.updateOrigin;
Sprite_Picture.prototype.updateOrigin = function() {
  PICO_Picture_updateOrigin.call(this);
  const picture = this.picture();
  const origin = picture.origin();
  switch (origin) {
    case π.origin.TOP_LEFT:
      this.anchor.x = 0;
      this.anchor.y = 0;
      break;

    case π.origin.CENTER:
      this.anchor.x = 0.5;
      this.anchor.y = 0.5;
      break;

    case π.origin.TOP_CENTER:
      this.anchor.x = 0.5;
      this.anchor.y = 0;
      break;

    case π.origin.TOP_RIGHT:
      this.anchor.x = 1;
      this.anchor.y = 0;
      break;

    case π.origin.CENTER_LEFT:
      this.anchor.x = 0;
      this.anchor.y = 0.5;
      break;

    case π.origin.CENTER_RIGHT:
      this.anchor.x = 1;
      this.anchor.y = 0.5;
      break;

    case π.origin.BOTTOM_LEFT:
      this.anchor.x = 0;
      this.anchor.y = 1;
      break;

    case π.origin.BOTTOM_CENTER:
      this.anchor.x = 0.5;
      this.anchor.y = 1;
      break;

    case π.origin.BOTTOM_RIGHT:
      this.anchor.x = 1;
      this.anchor.y = 1;
      break;

    default:
      if (Array.isArray(origin)) {
        this.anchor.x = origin[0];
        this.anchor.y = origin[1];
      } else {
        throw `Invalid origin: ${origin}`;
      }
  }
};
