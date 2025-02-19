/**
 * Global variables
 */
var x = null;
var y = null;
var grabx = null;
var graby = null;
var sizex = null;
var sizey = null;
var resizex = null;
var resizey = null;

function init() {
  script.log("Vimix module loaded");
  local.values.current.setCollapsed(false);
  local.values.sources.setCollapsed(false);
}

//function that send OSC message to Vimix
function messageTOtarget(target, command, val1, val2, val3, val4) {
  if ( typeof val4 == 'undefined' )
  {
    if ( typeof val3 == 'undefined' )
    {
      if ( typeof val2 == 'undefined' )
      {
        if ( typeof val1 == 'undefined' )
        {
        local.send("/vimix/"+target+"/"+command);
        } else {
          local.send("/vimix/"+target+"/"+command, val1);
        }
      } else {
        local.send("/vimix/"+target+"/"+command, val1, val2);
      }
    } else {
      local.send("/vimix/"+target+"/"+command, val1, val2, val3);
    }
  } else {
    local.send("/vimix/"+target+"/"+command, val1, val2, val3, val4);
  }
}

function moduleParameterChanged(param) {
  script.log(param.name + " parameter changed, new value: " + param.get());
}

function moduleValueChanged(value) {
  script.log(value.name + " value changed, new value: " + value.get());
}

function sourcechange(attribute, number, name) {
  target = "current";
  if(attribute == "next")
   {
      messageTOtarget(target, attribute);
      script.log("Target: " + target + " Command: " + attribute);
   }
  else if(attribute == "previous")
    {
      messageTOtarget(target, attribute);
      script.log("Target: " + target + " Command: " + attribute);
    }
  else if(attribute == "number")
    {
      messageTOtarget(target, number);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + number);
    }
  else if(attribute == "name")
    {
      messageTOtarget(target, name);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + name);
    }
}

function sourcecontrol(target, sourceid, name, batch, attribute, play, pause, alpha, transparency, loom, lock, speed, seek) {
  if(target=="id")
   {
     target = "#" + sourceid;
   }
  else if(target=="name")
    {
      target = name;
    }
  else if(target=="batch")
    {
      target = "batch#" + batch;
    }
  if(attribute == "replay")
   {
      messageTOtarget(target, attribute);
      script.log("Target: " + target + " Command: " + attribute);
   }
  else if(attribute == "play")
    {
      messageTOtarget(target, attribute, play);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + play);
    }
  else if(attribute == "pause")
    {
      messageTOtarget(target, attribute, pause);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + pause);
    }
  else if(attribute == "alpha")
    {
      messageTOtarget(target, attribute, alpha);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + alpha);
    }
  else if(attribute == "transparency")
    {
      messageTOtarget(target, attribute, transparency);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + transparency);
    }
  else if(attribute == "loom")
    {
      messageTOtarget(target, attribute, loom);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + loom);
    }
  else if(attribute == "lock")
    {
      messageTOtarget(target, attribute, lock);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + lock);
    }
  else if(attribute == "speed")
    {
      messageTOtarget(target, attribute, speed);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + speed);
    }
  else if(attribute == "seek")
    {
      messageTOtarget(target, attribute, seek);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + seek);
    }
}

function sourcegeometry(target, sourceid, name, batch, attribute, position, grabx, graby, sizex, sizey, resizex, resizey, angle, turn, CornerLowerLeft, CornerUpperLeft, CornerLowerRight, CornerUpperRight) {
  if(target=="id")
   {
     target = "#" + sourceid;
   }
  else if(target=="name")
    {
      target = name;
    }
  else if(target=="batch")
    {
      target = "batch#" + batch;
    }
  if(attribute == "position")
   {
     messageTOtarget(target, attribute, position);
     script.log("Target: " + target + " Command: " + attribute + " position: " + position);
   }
  else if(attribute == "grab")
   {
     messageTOtarget(target, attribute, grabx, graby);
     script.log("Target: " + target + " Command: " + attribute + " X: " + grabx + " Y: " + graby);
   }
  else if(attribute == "size")
   {
     messageTOtarget(target, attribute, sizex, sizey);
     script.log("Target: " + target + " Command: " + attribute + " X: " + sizex + " Y: " + sizey);
   }
  else if(attribute == "resize")
   {
     messageTOtarget(target, attribute, resizex, resizey);
     script.log("Target: " + target + " Command: " + attribute + " X: " + resizex + " Y: " + resizey);
   }
  else if(attribute == "angle")
   {
     messageTOtarget(target, attribute, angle);
     script.log("Target: " + target + " Command: " + attribute + " Value: " + angle);
   }
  else if(attribute == "turn")
   {
     messageTOtarget(target, attribute, turn);
     script.log("Target: " + target + " Command: " + attribute + " Value: " + turn);
   }
  else if(attribute == "reset")
   {
      messageTOtarget(target, attribute);
      script.log("Target: " + target + " Command: " + attribute);
   }
  else if(attribute == "corner")
   {
     messageTOtarget(target, attribute, CornerLowerLeft, CornerUpperLeft, CornerLowerRight, CornerUpperRight);
     script.log("Target: " + target + " Command: " + attribute + " A: " + CornerLowerLeft + " B: " + CornerUpperLeft + " C: " + CornerLowerRight + " D: " + CornerUpperRight);
   }
}

function sourcelayer(target, sourceid, name, batch, attribute, depth) {
  if(target=="id")
   {
     target = "#" + sourceid;
   }
  else if(target=="name")
    {
      target = name;
    }
  else if(target=="batch")
    {
      target = "batch#" + batch;
    }
  if( attribute == "depth" )
    {
      messageTOtarget(target, attribute, depth);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + depth);
    }
}

function sourcecc(target, sourceid, name, batch, attribute, correction, color, gamma, brightness, contrast, saturation, hue, posterize, threshold, invert) {
  if(target=="id")
   {
     target = "#" + sourceid;
   }
  else if(target=="name")
    {
      target = name;
    }
  else if(target=="batch")
    {
      target = "batch#" + batch;
    }
  if(attribute=="correction")
   {
     messageTOtarget(target, attribute, correction);
     script.log("Target: " + target + " Command: " + attribute + " Value: " + correction);
   }
  if(attribute=="color")
   {
     messageTOtarget(target, attribute, color);
     script.log("Target: " + target + " Command: " + attribute + " Value: " + color);
   }
  if(attribute=="gamma")
   {
     messageTOtarget(target, attribute, gamma);
     script.log("Target: " + target + " Command: " + attribute + " Value: " + gamma);
   }
  if(attribute=="brightness")
   {
      messageTOtarget(target, attribute, brightness);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + brightness);
   }
  else if(attribute=="contrast")
   {
      messageTOtarget(target, attribute, contrast);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + contrast);
   }
  else if(attribute=="saturation")
   {
      messageTOtarget(target, attribute, saturation);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + saturation);
   }
  else if(attribute=="hue")
   {
      messageTOtarget(target, attribute, hue);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + hue);
   }
  else if(attribute=="posterize")
   {
      messageTOtarget(target, attribute, posterize);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + posterize);
   }
  else if(attribute=="threshold")
   {
      messageTOtarget(target, attribute, threshold);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + threshold);
   }
 else if(attribute=="invert")
  {
     messageTOtarget(target, attribute, invert);
     script.log("Target: " + target + " Command: " + attribute + " Value: " + invert);
  }
}

function clonefilter(target, sourceid, name, batch, filter, delay, resample, blur, blurvalue, sharpen, sharpenvalue, smooth, smoothvalue, edge, edgevalue, alpha, alphavalue, glslfile) {
  if(target=="id")
   {
     target = "#" + sourceid;
   }
  else if(target=="name")
    {
      target = name;
    }
  else if(target=="batch")
    {
      target = "batch#" + batch;
    }
  if(filter=="none")
   {
     messageTOtarget(target, "filter", filter);
     script.log("Target: " + target + " Command: " + filter);
   }
  else if(filter=="delay")
   {
     messageTOtarget(target, "filter", filter, "", delay);
     script.log("Target: " + target + " Command: " + filter + " Value: " + delay);
   }
  else if(filter=="resample")
   {
     messageTOtarget(target, "filter", filter, resample);
     script.log("Target: " + target + " Command: " + filter + " Value: " + resample);
   }
  else if(filter=="blur")
   {
     if(blur=="fast")
       {
         messageTOtarget(target, "filter", filter, blur);
         script.log("Target: " + target + " Command: " + filter + " Value: " + blur);
       }
     else
       {
         messageTOtarget(target, "filter", filter, blur, blurvalue);
         script.log("Target: " + target + " Command: " + filter + " Value: " + blur + " Value: " + blurvalue);
       }
   }
  else if(filter=="sharpen")
   {
     messageTOtarget(target, "filter", filter, sharpen, sharpenvalue);
     script.log("Target: " + target + " Command: " + filter + " Value: " + sharpen + " Value: " + sharpenvalue);
   }
  else if(filter=="smooth")
   {
     messageTOtarget(target, "filter", filter, smooth, smoothvalue);
     script.log("Target: " + target + " Command: " + filter + " Value: " + smooth + " Value: " + smoothvalue);
   }
  else if(filter=="edge")
   {
     messageTOtarget(target, "filter", filter, edge, edgevalue);
     script.log("Target: " + target + " Command: " + filter + " Value: " + edge + " Value: " + edgevalue);
   }
  else if(filter=="alpha")
   {
     messageTOtarget(target, "filter", filter, alpha, alphavalue);
     script.log("Target: " + target + " Command: " + filter + " Value: " + alpha + " Value: " + alphavalue);
   }
  else if(filter=="custom")
   {
     messageTOtarget(target, "filter", filter, glslfile);
     script.log("Target: " + target + " Command: " + filter + " Value: " + glslfile);
   }
}

function cloneuniform(target, sourceid, name, batch, uniformvariable, uniformvalue) {
  if(target=="id")
   {
     target = "#" + sourceid;
   }
  else if(target=="name")
    {
      target = name;
    }
  else if(target=="batch")
    {
      target = "batch#" + batch;
    }
  messageTOtarget(target, "uniform", uniformvariable, uniformvalue);
  script.log("Target: " + target + " Command: " + uniformvariable + " Value: " + uniformvalue);
}

function output(attribute, enable, disable, fading, fadeout, fadein) {
  target = "output";
  if(attribute == "enable")
    {
      messageTOtarget(target, attribute, enable);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + enable);
    }
  else if(attribute == "disable")
    {
      messageTOtarget(target, attribute, disable);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + disable);
    }
  else if(attribute == "fading")
    {
      messageTOtarget(target, attribute, fading);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + fading);
    }
  else if(attribute == "fade-out")
    {
      messageTOtarget(target, attribute, fadeout);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + fadeout);
    }
  else if(attribute == "fade-in")
    {
      messageTOtarget(target, attribute, fadein);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + fadein);
    }
}

function session(attribute, open, close) {
  target = "session";
  if(attribute == "open")
    {
      messageTOtarget(target, attribute, open);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + open);
    }
  else if(attribute == "close")
    {
      messageTOtarget(target, attribute, close);
      script.log("Target: " + target + " Command: " + attribute + " Value: " + close);
    }
}

function oscEvent(address, args) {
  script.log("OSC Message received "+address+" with arg: "+args[0]);
  if(address.startsWith("/vimix/current"))
  	{
      setVimixCurrent(local.values.current, address, args[0]);
    }
  else if(address.startsWith("/vimix/output"))
  	{
    }
  else
    {
      setVimixSources(local.values.sources, address, args[0]);
    }
}

function setVimixCurrent(object, address, value)
{
  if(address == "/vimix/current/name")
  	{
      object.sourceName.set(value+'');
      // reset sources container
      local.values.removeContainer("Sources", "Sources");
      local.values.addContainer("Sources", "Sources");
    }
  else if(address == "/vimix/current/lock")
  	{
      object.lock.set(value);
    }
  else if(address == "/vimix/current/play")
  	{
      object.play.set(value);
    }
  else if(address == "/vimix/current/depth")
  	{
      object.depth.set(value);
    }
  else if(address == "/vimix/current/alpha")
  	{
      object.alpha.set(value);
  	}
  else
  	{
      messageid = address.split("/");
      if (value == 1)
        {
          object.id.set(parseInt(messageid[3]));
        }
  	}
}

function setVimixSources(object, address, value)
{
  messagesplit = address.split("/");
  if (messagesplit[3] == "name")
    {
      object.addStringParameter(messagesplit[2]+"-name", messagesplit[2]+"-name", value);
    }
  else if (messagesplit[3] == "alpha")
    {
      object.addFloatParameter(messagesplit[2]+"-alpha", messagesplit[2]+"-alpha", value);
    }
}
