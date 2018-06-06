'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SHADOW = 10;
var GAP_BAR = 90;
var barWidth = 40;
var barHeight = 150;
var firstChanelColor = 0;
var secondChanelColor = 0;
var thirdChanelColor = 250;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderBar = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderText = function (ctx, message, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillText(message, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура!!! Вы победили...', CLOUD_X + CLOUD_X + (GAP_SHADOW * 2), CLOUD_Y + (GAP_SHADOW * 3));
  ctx.fillText('Список результатов: ', CLOUD_X + CLOUD_X + (GAP_SHADOW * 2), CLOUD_Y + (GAP_SHADOW * 5));
  var maxTime = getMaxElement(times);

  var getSelectColor = function () {
    var colorBar = 'rgba(' + firstChanelColor + ', ' + secondChanelColor + ', ' + thirdChanelColor + ', ' + Math.random() + ')';
    return names[i] === 'Вы'
      ? 'red'
      : colorBar;
  };

  for (var i = 0; i < names.length; i++) {
    renderText(ctx, names[i], (CLOUD_X * i) + GAP_BAR + barWidth, CLOUD_HEIGHT, '#000');
    renderText(ctx, Math.round(times[i]), (CLOUD_X * i) + GAP_BAR + barWidth, CLOUD_Y + CLOUD_Y + (GAP_BAR - GAP_SHADOW - GAP_SHADOW) + (barHeight - ((barHeight * times[i]) / maxTime)), '#000');
    renderBar(ctx, (CLOUD_X * i) + GAP_BAR + barWidth, CLOUD_Y + GAP_BAR + (barHeight - ((barHeight * times[i]) / maxTime)), barWidth, (barHeight * times[i]) / maxTime, getSelectColor());
  }
};
