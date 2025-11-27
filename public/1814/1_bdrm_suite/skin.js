// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: 1814_1_bdrm_suite.ggsk
// Generated 2023-06-28T12:04:38

function pano2vrSkin(player,base) {
	player.addVariable('ht_ani', 2, true);
	player.addVariable('opt_3d_preview', 2, false);
	player.addVariable('PKG', 0, "_PKG01");
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._map_container=document.createElement('div');
		el.ggId="Map Container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 750px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 750px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._map_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_container.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1800))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width > 1200))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width > 800))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width <= 800))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_container.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_container.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_container.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._map_container.ggCurrentLogicStateScaling == 0) {
					me._map_container.ggParameter.sx = 1;
					me._map_container.ggParameter.sy = 1;
					me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
				}
				else if (me._map_container.ggCurrentLogicStateScaling == 1) {
					me._map_container.ggParameter.sx = 0.75;
					me._map_container.ggParameter.sy = 0.75;
					me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
				}
				else if (me._map_container.ggCurrentLogicStateScaling == 2) {
					me._map_container.ggParameter.sx = 0.5;
					me._map_container.ggParameter.sy = 0.5;
					me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
				}
				else if (me._map_container.ggCurrentLogicStateScaling == 3) {
					me._map_container.ggParameter.sx = 0;
					me._map_container.ggParameter.sy = 0;
					me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
				}
				else {
					me._map_container.ggParameter.sx = 1;
					me._map_container.ggParameter.sy = 1;
					me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
				}
			}
		}
		me._map_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 750px;';
		hs+='opacity : 0.9;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 456px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			me._map_1.ggLastNodeId = id;
		}
		me._map_container.appendChild(me._map_1);
		me.divSkin.appendChild(me._map_container);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=30000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_ani', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('ht_ani', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._button_map=document.createElement('div');
		els=me._button_map__img=document.createElement('img');
		els.className='ggskin ggskin_button_map';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAB4CAYAAABIMJgJAAAbVUlEQVR4nO2de3RTVdr/P0matEnvV5BCLXehKAWU2w8RdeFtfnJ3gVyEURQUZ3mFnzMD8yJL14jDODqD+v4Yh5eREaQjt7GjKEtAKeUqVWGkXEQuFkppS1vS0qZJzvvHIceTNE2TNMk5gfNZKwua7LPPk5Pv2efZz3723jpBEFCQDGAA0Bu46eq/2UA6YAESlDNNI0hsgBWoufpvBXAUKL36bwlQqZRxuggL3gLcDdwF3AncAugiaYCG4gjAd8B2YBvwBdAQqZNHQvB6YDQwC3gQiA/3CTWiinrgY2AVsBVwhvNk4RR8AjAbeAbIDddJNK4pTgFvAe8hukMhJxyCNwNPAwsQfXQNjUCpBP4A/AW4EsqKQy34KcBSICeUlWpct5wB/h/wYagqDJXgbw'+
			'T+G7gvFJVpaHjwGTAHON3eivTtt4XpiL1uTewa4eJeRI1Nb29F7Wnh44C3gUfba4SGRgD8D/AU0BjMwcEKPgvYBAwL5mANjXayGxiHOKgVEMEIvitivLR7oAdqaISQHxDHd34M5KBAffg+QBGa2DWUpzuiFvsEclAgLXwPxOHgzoHZpaERVn5CTFM54U9hfwWfCRQjil5DQ22cAIYDF9sq6I9LY0LMddDErqFWeiBqNLatgv4I/h1gSHst0tAIM0MQw+Q+aculmQ6sDpVFGhoRYAbwj9Y+9CX4GxFHt5LCYJQbgiDQ1NSEXh+Kgd/gzq/T6TCZTH6Vdzqd2Gy2dp1Tp9MRG+v7CWy327HZbOh06p4yYDablTZBTh3iPAuvaQgxPg78/0RA7AB79+7lj3/8I9nZ2YAoQJcIXcj/73Q6W7zvunFdN42rjF6vl+pzlXcd'+
			'43Q60el0NDQ0kJGRwSuvvILBYGjT3sOHD7N48WJ0Oh1ms5lAxjL0ej2NjY0kJSXxt7/9zWfZ5cuXs3r1atLS0ryK3vO7+dtgeF4/+TX0/C56vb7V62232wHYvHkziYmJfp07AiQhatd7qovrS3q8pggR5M477xQQZ8Io9kpISBBWrlzpl70fffRRu89nsViEM2fOtHqO2tpa4aabblL8uvjzuueee0IlhVDysOBF295aeAtiim/EKCsri+TpvGK1Wjl92r9kvLZcEX9obGzk1Vdf5cUXX8RgMLg9gQRB4O233+bkyZPtPk8kOHDggNImeOM1YDMe0we9Cf5pIpzPbrFYpP+bTCZycnIwmUzY7faw+K+CIGA0Gjl79ix1dXXS+/v376e4uBiLxSI9xj3Pr9PpOHToUAv7u3TpQkJCgtvjX05CQgJHjx6lokJM/3A6na'+
			'xYsYINGzZgNBppbm4GwGg0Yrfbqa6ullwGEP3kkSNHAqJvL8hcD/n/5W6O3F2R48vd86xPXq/T6cRsNlNWVsZ//vMfyb709HSv31lhchC1/Lr8Tc9OawJibkJEZyrl5+fz7bffAjBo0CBWrlxJfHw8TU1NYRO8xWJhw4YNLFiwAIfDIX2WmJiI2WyWfkzP8xsMBqqqqtyO+dWvfsXcuXNJS0vD4XB4tTk5OZmXX36ZN954w+1Yfxk0aBB79+7F4XBIN4c3XE8I+d+eeD5N/MFV1mKxcPz4cR577DGKiooA6NmzJ8eOHQvk60SKKsTppdJ0Qc8W/pcoPC2vU6dO3HLLLRE518yZM3nppZfcBHj58mUuX74cUD3Dhw+nb9++bZbLy8vDbDZjtQY+XTMrKwuDwYDBYPA7mhQuevXqRX5+viR4FZOOqOm/uN6QC14PPBdp'+
			'i8C9FZI/xsNNfX19u+vQ6/Wkpqb6VVYeyjQYDMyYMYMhQ4a0iCA5nU527NjBxo0bpdY8mKdCOPH1lFEZzyMOSDnBXfCjEVN/I45ScWb5j6bX6xkxYgQTJkwgNjZW+kwe5pT7vEajkQsXLtC7d2/uuOMOv84n95fNZjNvv/22W/9FztSpU9m3bx+nTp2SjlUTbblNKiIXuAfYAu6Cn6WAMQCtdvTCjfyHysjI4Pnnn2fs2LERO3drYgexIxwT42uYRD1YrVaqqqrU2nkFUdtugrcgLpJ03WIwGEhKisg4m180NDSozo1pjQsXLnDrrbeSnJyMw+HA6XTidDqZM2cOs2bNIiUlRWkT/y/iAmD1LsHfg4IrgimVUiBHkI0cqoFAIihKIH8qOxwOyfWS89VXXzFu3Dg1CD4e0WXf5FKatuKARkBUV1e3WcZsNqvJLbsPfn'+
			'Zp7lLQEMV8eE/U1qKquTM4bdo09Ho9NptNCpeWl5dTUlISkuhXGLgLRMFnAT2VtEQNLo1GYEyYMIEJEya4vdfU1MSkSZMoLCxUyCqf9ASy9MBApS1RSwuv0T6sVqvig2JtMEgP5Ctthca1g5o6/l7or0cFc1XV4quqxY5oRW19IC/00KPQ6KoaiYIfTNW0lp2pIrrpgU5KW6FxbSBPnVApN+iBNKWtUEuroBY7NMJGmh4xLKkoWpTm2iAKXJosVQTA1RKHV/njWCMEqEJpWgvvnWi7AaPAh1eH4DVaYjAYVPPk85cocGnUIXi1XyQlMBqNSptwTaIKwasFNd14R48eVWsSVlSjitxNtfh9StnhdDrZuXMnX3zxBWazGYfDwbZt26iqqlLEnmCJBh9eFYJXS8uqlB3Hjh3jqaee4vvvv2+1jFquUbSjCpfmev8xbTZb'+
			'm0uDBLO0R6TROq1+opawpFKPY5PJ1OZipCparDSqUYVLE23ht1DjuZrYww8/zJIlS9xWNVDZktRe0Xz4KEMtj+NbbrmFHj0Uz9oOGM2l0QiK+vr6qFmiI9pQheCvdx9eEAS3a3C9u3jhRLuyKsFT8Gp3DbwRDT68KgSvlh9XKTvULpJrCU3wMhuUciU8O3tquB7BoOQ19BdVWKeGFs7Tj470ueXXQC19mmBQ+82qCf4qdrs97EJrbm5udRkL+TWoqalRfUvpjbi4OLcthNSIFoe/yqVLl1i0aBHbt2/n0qVLOBwO0tLE6b6t7ackb5m93SzysjExMXz66ade93f1dAXWrVuH1WolKSkpasKTJpOJ48ePs3v3bqVN8Ykm+Ks4HA72799PSUkJDocDQRD82rPVRVtPKZ1O57d4y8vLWblypbQBQzQQyPdTElUIXqnHd3'+
			'Nzc4utW+QuRzh/wLa2jBEEISoEFG2oQvBKddLMZjO9e/d2E3ltbS2VlZXS30lJSWRkZIS8MxYf//Ny/J4dZovFIm1iFk00Nzdz/vx5Ve//pArBK9XC5+TkUFpa6vZeQUEBU6dOlVrXt956i1mzZoXVDk8f/pe//CXLly8P6znDQV1dHWPGjOHLL79U2pRWUUUoQE1+alpamtsKuJHaQlN+DXr2DN3q5du2baOgoICmpqaQ1dkagiCQnZ0d9vO0B1W08EoKfv369SQkJEgdxM2bN3PlyhXp81dffZXHHnsMo9HYYntJOZ5/6/V6GhoaSExMZMiQIT63q/eMw1dXV0u7BraH7du3M3nyZCorK1m0aBEvvfSSz43U2ovdblf9RBVVCF4pLl++zEMPPURCQoIkWM848oYNG/j8888xGAwBC95qtZKbm8vatWsZMGBAq3Z4'+
			'1hcqF6+4uFjqj6xZs4a5c+eGVfBqelK3huoEH8k9gS5cuAAQ1ul15eXllJWV+RS8p1CcTqdf4qmrq6OoqIjMzExuu+22Fp/LZ0l16NDB67Wtq6ujuLiYUaNGERcX1+Y5fREN+fCqE/yPP/7I1q1bsVgs1NfX+9zNzvPieivnKuM5dJ+VlcXq1atDaLl3jEajX9GW1ga3fLFkyRI++OADLBYLixYtatG5ll8fb3XW19czc+ZM9uzZw4wZM1i4cKGqtu4MB6oT/JEjR5g+fToGgyFscWhBEIiNjaWyslISgl6vZ/To0cyYMYNvv/2WxsZGhg0bhl6vl8JsrrKuGLl8Z26Xz22z2SgsLJT2OfKn1Qs26aq6upry8nIAnn32Waqrq3n++eelz+UdVZvN5ib6iooKRo0axZEjRwD4+9//zuTJkxk0aFDAdriIhvRg1Qne4X'+
			'BQUVER8fOmpKQwe/ZsJk2axKRJk3A6nUHNIxUEgeHDh0uC91cEbbXG3pg/fz67d++mtLSU2tpafve73+F0OnnxxRcB3DrKKSkpkktTWVnJ4MGDOX36NCC6kUuWLCEvL8+/LxnFqE7wer0es9kccV/QZDJJLbmviEpb6HQ6t0Elf4+Rt/BxcXF+uUF9+vRh06ZNPPDAA5w8eZL6+nr+8Ic/MHjwYEaOHMncuXOJj4/nq6++YtGiRaSlpdHc3MyUKVMksZtMJt544w0ef/zxqExYCxTVCX7gwIFs3LiRlJSUiG2QJQgCRqORhISEgI6rqKhwc21AfEL94x//CKgeT7dn/fr1DBs2jOzsbJqbm2loaKBnz56kpqa2OLZ379589tln3H///Zw7d47GxkaKiooYOXIkRqORRx99lEcffVQqX11dzaFDh7BYLJjNZhYvXsy8'+
			'efMCsjeaUZ3gs7Ky6Ny5s9Jm+KS+vp5Nmzbx8ssvU1tbS3x8PA6HQ1puw59dqj2RC76kpIS7777b7fMpU6awdu1ar8f26NGDnTt3UlhYSFJSEuPGjQPENIkTJ04AotvSv39/OnTowJYtW9i7dy/9+vVjxIgRAdsazahO8Grv9AAcPnyYefPmUVtb22ZZh8PR5pPKbre3WddPP/3k8/OOHTsye/Zsqb6ioiLeffdd1qxZI5X561//yvjx4xkwYIDPMOm1jCoEr/bYrSeJiYl06dLFL8HbbLY2ffq0tDTuuOMO1q1bR0xMDDExMTQ2NrqVcQ0YNTY2cuDAgRYx9aysLLp16wZAUVERo0ePbnGjPf7442zdupV169YBcPHiRY4fP+7muzscDrp3707Hjh3b/G6eaHF4P1H7RfKG/EmUlZXF5MmTyc7ORq/XS6+Ghgaysr'+
			'LabE07d+7Mu+++y5133klcXBxGo5Gvv/6ad955RxK+xWLBarXym9/8hoKCAoxGo9sYQ25uLu+//z65ubns3LlTEnufPn3o1q0bX375JVarlYKCAlasWEFycjKHDh1ixowZbqsk2O12br75ZpYtW8bNN98cjkunKKoQfLThGWp86KGH+POf/9yuOlNTU5kzZ47098SJEyksLOTYsWOA6IPr9Xp27twpjRDL+emnnygoKGDBggXSyLDZbGbBggWMGTOG+++/n3379mE0GqmsrCQ5ORmdTse5c+da1HX+/HnWr19Pv379orIx8oUq4lDR4LfL8Xx0p6WlhXyQLDY21i08arVasVgsfPDBB9x+++0tyvfv35+xY8fS1NQkbaRgNBrp3LkzaWlppKSkSGVdKQSJiYleQ7C9evVi7NixAYtdG3jyE7VfJE88f9j6+nqam5tD'+
			'PmFDfhO5XJS+ffvy4YcfcvbsWbeyHTt25MYbb8RqtUpukMPhaNEXgJ/HGQYNGsTBgwdb5BJlZmZK/YFA0Hx4jZAhF1KnTp3o1Cm4DdTtdjtPPPEEv/jFL4iJieGuu+6ib9++oTJT9WiCv84QBIGNGzfy73//GxCzKN98803GjRt33Yy02gBTWwXDifxCl5eXc/ToUbe87ebmZjp06BDwkP31jtzF8Jw37Fou5OzZs0ycOJE//elPTJw4kZKSEnr06MGNN954TV5vPeA7GTwCeI4y3nTTTeTk5Eiv7t27tzrKqATeJmyo3XeV07VrVyZNmuQWLn3uuefIyclh7Nix5OXl8fTTT1NWVtbmXIEowxqDKPh0pSwQBMGv7Mjm5uaQTHsLBd6WxlNTx9vXvICYmBjWr1/PgAEDKCkpYeDAgVKZuLg4mpqaEASBVatWUVpayu'+
			'DBg1m8eDHnzp0jOTnZZ9pHFERpGlyCV5SOHTtK80hdEz48t2yMjY2NqlZUDcgF6Lp2Op2OnJwcwH2mV0JCAr/+9a85cuQIH374IXa7nT179rBv3z7Onz/P119/TZcuXXjvvfda3Z0kCqI01THARSUt0Ol0rFq1ih9++MFt5PDQoUO888470sCIyluOqOLSpUukp6e7XdPbbruNF154gYqKCnbu3CmlDzudTv75z38CcPLkSZ577jlWrlxJZmZmi3qjoIUvjwF+VNqKvLy8FpMPhg0bRmFhodeRQI3WaS3NWS5Eb25hZmYmdrudzMxMaS6syWTi2WefpWPHjqxdu5b9+/fzySefUFRUxPjx41vUodfrMRqNIfw2IeeHGOCE0lZ4o7Ky0uugiRpR6lFeWVnJhg0b+O6770hISGDQoEHcd999lJWVtSgrF7w3W5ubmxEE'+
			'gStXrkiDXCkpKSxduhQQpwvu378fp9PZakc2NjZW7Z3cEzHAN0pbEe0oIfbdu3czf/58vvnmGymVID09nV69enH48GEAKUcfkPpIDodDyrXxHC1ubGzEZDJJ30e+ioF8FNl1vrVr13Lx4kViY2MxmUwcOnSI/fv3h+srh4LvYoCDSluhETgfffQRu3btcnuvqqrKbblqlxABhg4dyg8//IDRaKR79+4t6rvhhhtITU2lrq7Oa+xevl7kli1bKCkpYcOGDTQ0NEhTFBsbGyM2Sy1IDsQAFYhuTfRtDKoSIh2WdDqdUiubnZ3N7NmzcTgcLF261E2YnTt3lpa+e+WVV1i4cCE6nU4a1EtKSiIuLo7c3FyefPJJDAYDTU1NkmhbS4gTBEESuHyVNk9cy46rhONAhSu1YBsqE7yaQ1xK21ZUVMQnn3wCwOTJk1m0aBEGg4'+
			'E+ffrwxBNPSDeDwWCQOqhxcXEtFloaOHAgVqvVbRJ5SkoKGRkZXLp0yescWhA7pyaTyc3NSUhIwGKxuAncYDCoqcXfBj/n0nwKPKGcLS2JghCXRKRHWpOTk0lOTubs2bMUFBTw8MMPc+uttzJ16lQEQZCmH8p9+NbwzPCMi4tj165dVFVVkZycLL3vWY/8qZaUlMSqVasYNWqU1PnV6/Wkp6erYqDwKlvg53z4rUC9crZEF543Y6RvzP79+/PAAw8A4sSP8ePH8/333wMwbdo03nzzTcxmMxUVFUG3sOnp6dI0wrY2fMvJyWH8+PGkpqaSlZVFhw4dyMzMVJPY6xE1Lgm+HihUzBwveLoNatrZTonUAs/6H3zwQTIyMgBR9M8884z02axZs1i2bBmPPPIIubm5YbFFbk8UhI8Ludqgy2/BVYqY0gqeFzUrK0s1Pn18'+
			'fLxbNmd8fHxYduuQ1+npf48YMYIVK1ZI69fv2LGDgoIC6fOnnnqKZcuWkZ4e+jSphIQE0tPTo2mHklWu/8gF/zlwKtKWtIZnC19SUqIan76srIyLF3/OyKiurg75Ni9Wq5WGhgbp75qamhZlxo8fT//+/QFxYsecOXM4f/58SO0A8beQj6CWlZVRWloqpRirpSFqhdOI2gbcJ4A4gTeA9s1GDhNvvfUWu3fvVrxV0ev1nD59mjNnzkjvffrpp8yfPz+k7sOWLVvcskgPHjzIgw8+KHUedTodNpuNb775edywpqaGefPmsW7dupAO8QuC4HZD79mzB51OF5FdRULAnxC1DbSc8fQ/wH+hYLpwa9TU1PD555+3XVABamtrQ97Cu/aKddHQ0CAt0OqLzZs3s2bNGmbOnBkyW2pqatxGUKNE6ABVwN/kb3h2o63A6xEzxw'+
			'eXL19W/a7OLu6++26v2YPtYdSoUUGt1e50OnnttdcoKSkJmS2bNm1i69atrX7ubdkQlfA6oqYlvM1pXQ7MA3IiYVFr5Ofn89vf/pYdO3aQnJysCv/dNeBSUlLCF198Ib2fn5/vFrMOBZ5T7NLS0pg+fTogtrDyVOrY2FjOnz/Pxo0bsdvtlJaWsmzZMlavXt3u0OClS5coKCiQ/PW+ffsyevRoKdEM4Mknn2zXOcLEGUQtu+OKhni8HhZUgsPhUNXL6XQKBw4cEHJycgRAAIShQ4cK+/btE8rLy/1+1dbW+vzely9fFrp27SqdY8SIET5tcjgcwubNm4XY2FgBEHQ6nbBgwQLBbre36/qfOHFCuOGGGwRAiI2NFQoKCqTzuV4qZargRdutCR5BELYoY6f6OXr0qJCfny+JMZjX7NmzfZ6jtrbWTfD33ntvm3bZ7Xbh'+
			'97//vWA0GgVAyM7OFoqLi4P+njabTZg/f75kw5w5c4KuK8J8JrSia1/Pu7lAdDjREaa+vr7dfmugPr8/A28Gg4FnnnmGsWPHAmL4cM2aNW7hzUCwWq28//77gDgOMGzYsKDqiTB1iNr1iq91aU4BTwPvh9igqCc+Pp6hQ4dy8OBBKW/EE0E2HC9cnaju8oOh7d0Kgw2/ms1mXnjhBfbu3cvZs2dZvnw5Q4YMYdq0aQHHyx0Oh3RjZ2ZmtjqXVWU8jY9ZfG0txLQauAN4LJQWRTu9evWioKCA4uJiBEHwKk6n0ymFFYWrGx6/9957UmvbVmeyPZ3NoUOHMmfOHBYuXAiIu3FPnDgx4D2r5Dbk5eVJg1wqZiWiZlvFn5XH5gH9gCGhsOhaISYmhpEjR/pdPjU1lX/961+cOnUKQJok3RqHDx9u1/6ww4cPJyUlhZqaGs'+
			'rKyoKKcslv5P79+we8JVCE2YuoVZ/4I/gm4EGgGJXlzEcTgiC4uTGFhYWMGTOGjIwMt0GrmJgYbDYbR44cCWrrHBfdunUjLy+PXbt2sXfvXl577TUGDBjQIvPRm5vj2n5TPqMqnDt4h4ATiBptM4vN37UlLwL3AzuA7KDNuo7xzKisrKzk448/9vv4QF2cuLg4SaS1tbUsXbqUpKSkFkl53gSv0+lwOBxu+TvtedqEmTJEbfq13Ewgi6meAEYDnwFdArfr+qaurs7ndLi2CHTv2oyMDCZPnsz27dux2+3YbDYqKyuDOndiYiL9+vUL6tgwcxa4lwBW3gh09eAjwP9BnD1y/ayxHAK6du3K8OHD2b17d0AzpARBQKfTBdRfANH/fuSRR3A4HLz++utcuXKlzciQNxobG7n99tuZMmVKwMeGme+B+xBF7ze6YDozQBrw'+
			'MTA8mIOvV+x2e9ATWQwGQ1ChSsEj0zEY9Hp9UDdLGClG9NkD7uQEK3iAWGAZYtxTQyNSLAdeRAymBEx7BO9iPGL8M6Wtghoa7aAGcTxoQ3sqCcUs241APmJnVkMjHHwGDKCdYofQ7eJ3GrEDMRUxLVNDIxScQdTUfYRo+mkoXBpPzMCvgPlARqgr17guqETsH/4ZCD6W64VwCN5FIqLP9QyQG66TaFxTnALeQpyWF5ZliMMpeBd6xAGrWYihpGtvpyyN9lCPGOJehbhYUlgXIIqE4OVYgLuvvu4EbgZUvcaDRsgRgEPAduCLq6/gEvaDINKC9yQTsffdC7gJ6I2Yq5OO+CTQngbRSf3VVxVirstRoBQ4BpSg4DZL/wud3tTGFga9cwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_map__img.ggOverSrc=hs;
		el.ggId="Button Map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_map.onclick=function (e) {
			me._button_on_off.ggVisible = !me._button_on_off.ggVisible;
			var flag=me._button_on_off.ggVisible;
			me._button_on_off.style[domTransition]='none';
			me._button_on_off.style.visibility=((flag)&&(Number(me._button_on_off.style.opacity)>0||!me._button_on_off.style.opacity))?'inherit':'hidden';
			me._button_50.ggVisible = !me._button_50.ggVisible;
			var flag=me._button_50.ggVisible;
			me._button_50.style[domTransition]='none';
			me._button_50.style.visibility=((flag)&&(Number(me._button_50.style.opacity)>0||!me._button_50.style.opacity))?'inherit':'hidden';
			me._button_75.ggVisible = !me._button_75.ggVisible;
			var flag=me._button_75.ggVisible;
			me._button_75.style[domTransition]='none';
			me._button_75.style.visibility=((flag)&&(Number(me._button_75.style.opacity)>0||!me._button_75.style.opacity))?'inherit':'hidden';
			me._button_100.ggVisible = !me._button_100.ggVisible;
			var flag=me._button_100.ggVisible;
			me._button_100.style[domTransition]='none';
			me._button_100.style.visibility=((flag)&&(Number(me._button_100.style.opacity)>0||!me._button_100.style.opacity))?'inherit':'hidden';
		}
		me._button_map.onmouseover=function (e) {
			me._button_map__img.src=me._button_map__img.ggOverSrc;
		}
		me._button_map.onmouseout=function (e) {
			me._button_map__img.src=me._button_map__img.ggNormalSrc;
		}
		me._button_map.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_map);
		el=me._button_on_off=document.createElement('div');
		els=me._button_on_off__img=document.createElement('img');
		els.className='ggskin ggskin_button_on_off';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAB4CAYAAABIMJgJAAAKyUlEQVR4nO3d7YtcVx3A8e8MxdpNDE7TJGglTe8G27xQWycQrAg2nW3ii4K+2FAlQnxgFiTSVzrxP5itolSrOIsPgfpCNqBCCzbONkWQiDBDNUKT6s40DxZsHmZLzaalL3J9cfZu5+Hcmftwzr13Zn4fuOzu7Jwzvz3z2zNn7j3nTM51XVJ0D/Aw8ADw4MbXe4HtwAywNb3QRETvATeBtza+XgVeAy5sfH0FuJ5WcLmEE34GeAw4CDwKfBLIJRmASJ0LnANeBs4ALwG3knrwJBI+D8wBx4AngC22H1CMlXXgeeAkUAdu23wwmwm/Ffgm8BSwx9aDiIlyEXgG+AVqOGScjYS/CzgOfBc1RhcirOvA94GfAO+YrNh0wj8JLAK7TVYqptZloAL81lSFph'+
			'L+PuDnwGETlQnR5zSwAFyKW1E+fiwcRb3rlmQXthxC5djRuBXF6eE/CPwU+HrcIIQI4dfAt4B3oxSOmvA7gT8An4lSWIiY/gp8EXVRK5QoCX8/6nzpbNiCQhjUQl3feT1MobBj+H3AX5BkF+mbReXivjCFwvTwe1GXgz8WLi4hrPoPaprKapA7B034HcBZVNILkTWrwCPAtVF3DDKk+QBqroMku8iqvagcvXPUHYMk/M+AA3EjEsKyA6jT5EONGtIcBZ4zFZEQCfgq8Bu/Xw5L+PtQV7e2WQhKCFveRq2z0E5DGDakqSHJLsbPNlTuavkl/JOo+QtCjKNDwJd1v9ANaWaA88gUXzHeLqMuSvUsH9T18MeRZBfjbzcql3v09/BbUXMTZKWSmAQ3UMtLN5cL9vfwX0OSXUyO7aic3tTdw+dRl2jvTzgoIWy6iJpodht6'+
			'e/g5JNnF5NkDPO790J3wx5KORIiEHPO+8YY0M6jVI7JJkphE68AuYN3r4R9Hkl1Mri2oIfvmkEZ2HBCT7jC8n/AHUwxEiCQcBDWG3wm8mXIwQiRhVx74dNpRCJGQYh54KO0ohEjIp/LIWlUxPfbmkaurYno4eeCjaUchREI+kgfuTjsKIRJyd85N+WP8hEiSif3hhRgbkvBiqkjCi6kiCS+miiS8mCqS8MKYtbU1FhcXmZubI5fLbR6zs7McOXKEdrtttXwgrhAG1Go1t1AouIDvUa/XrZUP6o74/zLhra2tcerUKZrNJu12m2azydraGgCFQoFisYjjOBSLRebn5ykUCmmEmZhms8n+/ft7bqvX65RKpVD1pNWuS0tLLCwspFY+lNj/MiG0Wi23XC4P/S/WHeVy2W21WkmGmqj+NimVSqHKp9munU5nZM/sHboeOm'+
			'75sBJJ+E6nE+kJ0T1BnU4niZAT02q1Bv7OWq0WqGwW2rVarWrrdBzHrVarm0e5XHYbjYbx8mFZT/hGo+E6jhP7SfGOQqFg5A/Piv6EdRwnULmstGupVBqoa35+PrHyYVlN+CBvRKIeQXvBLOt0OpH+riy1q66OMP84ccuHZS3h6/X60IZ1HMetVCru8vJyz8tpp9Nx6/W6W6lURvZgJsZ0aep/OQ/Su2etXXXlw4hbPiwrtbdaLd8eqFAouNVqNXBd1Wp1aF3j+mZW92ZtVLtksV0l4V39uAxwi8VipARttVpusVjU1hn2jEZW9PfuhUJh5BvHLLbr1Cd8rVbzfVLinGHpdDq+T844jufD9u5ZbdepT3jd+NDU0MPvJX3Y2HdYg3Y6HbdarQ70nKVSya1UKtaGS7rkHZW0WWhXv1OIQQ4TdWTuPLzfG6owY8tR/BrM'+
			'rzH8Gn95eTnQmQ6TsXv6k7dcLg+9f1baVRK+T6VSCdX7RqXr7SqViva+uobzGx74HaMSMgzdY4/qpbPSrpOQ8EZnS66srAzcNj8/b/IhfOvUPbafEydOhHq8paUlTp06FarMsLq6lctlHMcZWmZc2nUcGF3EncvlBm6LMglqlJWVFebm5gZu1/0pupi6OY6zOZHKm3ylm4bqOA6tVit60OjjbrVaIxM+K+3abrcH2kZ3/3q9PnCbF2t/HUHLAxSLxfgT3mK/RmxoNBralyEbc190VyhBf4VOdz/v0I2Bh81PiXs2SPfmeJSstqtHd/8w4pYPy9iQxpuG2s/G1F6/Ov1i0KlWq1QqFW3dtVpN2+s2m83gQfZZWVkZGB7oHr/fuLVr1k3liifHcUYmm+73cVbc9L8HKJVKxockYjRjCZ9k7xC31yuXyyPvo0vGqG/g2u'+
			'229s1qEOPUrmPB5PgIS6eS+vmdlzYdU9DHGCXqFOBhcaTdrsNiC8NUGwdldEhTLBYHbrNxWktXp+6x/SQ5lND17kHG7t3GpV3HgdGE1yWSqfPXo+rM6ni4P1bHcQIPZzzSrgaZfLnIyiXwbrr7BhWnrOtGmwKsk8V29cRto7jlw5rqyWOjxH0yokwB9pO1dvVMfcJnbRprmglvonf3ZK1dPVOf8K6brYUKaSV8f4LG6d09WWpXjyS8m62laGklfNgpwEFkqV09kvAbgi42rtfrVhcbp5HwUaYAB5WVdvVIwncJO+88zBF0IlcaCd8/TDA5n951s9GuHkn4Po1Gw+geKmE3DEo64XU9sI2lgmm3q0cSXiPNLeGSTvgoU4CjysJWe5LwQ8TZ9DPqblRJJryud09is6g02tUzbgmfysdWJrmts261UNA/OWzZhYWFnnkz'+
			'pVLJd/WODWlslx2nfU2UD0s+p9WQdrvN7Oxsz23Ly8tW1p6K6KZyAYgNi4uLPT97a2VFtuSB99IOYtyZmAIskpEH/pd2EOOuP9mjTAEWibh5Byrht6cdyTgrFApUq9XNnydt0cQEuZVzXfcc8Im0IxEiARfywLW0oxAiIf/NA6+nHYUQCWnlgdW0oxAiIat54O9pRyFEQs7lXNfdCbyZdiRCJGBXHriKDGvE5Ps3cNWbWnAmzUiESMAZeH8uzR9TDESIJLwIarYkwBbUOH5LmhEJYck6sAtYz3fd8EJ68Qhh1QuoHO+ZHnwylVCEsO+k902ua/1HHmgBe5KPRwhrLgEOcBt6e/jbwA/TiEgIi37ERrJDbw8PsBW4iEwXFpPhBmrEctO7oX+J303g6QQDEsKmp+lKdhjs4QFmgPPA7oSCEsKGy8A+4Fb3jbpF3LeAcB'+
			'9VLUT2fI++ZAd9D+95EThkMyIhLPkTPrk7LOH3AP8AttmJSQgr3gYewmdh07B9aS4Cxy0EJIRNxxmyim/URkzPAb80Go4Q9vwKlbO+hg1pPHcCfwYOGApKCBv+BnweeHfYnYIkPMAO4CywN3ZYQpi3CjxCgB04gu4teQ34AvBGjKCEsOENVG4G2m4mzGaqq8AccCVCUELYcAWVk4GXqIbdPfg88Fng1ZDlhDDtVVQung9TKMp22VeAz6HG9EKk4SwqB0OPNqLuD98BDgLPRiwvRFTPonKvE6Vw0LM0w3wJdf7zw3ErEmKIt4BvAL+LU4mJTwD5PepS7mkDdQmhcxp4mJjJDuY+8uYScBj4CmpaphAmXEbl1GHUVJfYTAxp+t0FfBv4DnCP6crFVLgO/AD4MfCOyYptJLznQ6gx11PIwnARzEXgGdT8LSsfxWQz4T15'+
			'1MWBY8ATyGZPotc68DxqK406XQuubUgi4bvNAI9tHI+iPmpn8JNpxSRzgX8CLwMvbRwDK5NsSTrh++1Avfv+OPAg8ABwL2rXhC3Iq8G4Wt84bqDmurwGXAD+BbxCih+z9H8MJsYfZJ7DwwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_on_off__img.ggOverSrc=hs;
		el.ggId="Button ON OFF";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_on_off.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_on_off.onclick=function (e) {
			me._button_on_off.style[domTransition]='none';
			me._button_on_off.style.visibility='hidden';
			me._button_on_off.ggVisible=false;
			me._button_50.style[domTransition]='none';
			me._button_50.style.visibility='hidden';
			me._button_50.ggVisible=false;
			me._button_75.style[domTransition]='none';
			me._button_75.style.visibility='hidden';
			me._button_75.ggVisible=false;
			me._button_100.style[domTransition]='none';
			me._button_100.style.visibility='hidden';
			me._button_100.ggVisible=false;
			me._map_container.ggVisible = !me._map_container.ggVisible;
			var flag=me._map_container.ggVisible;
			me._map_container.style[domTransition]='none';
			me._map_container.style.visibility=((flag)&&(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity))?'inherit':'hidden';
		}
		me._button_on_off.onmouseover=function (e) {
			me._button_on_off__img.src=me._button_on_off__img.ggOverSrc;
		}
		me._button_on_off.onmouseout=function (e) {
			me._button_on_off__img.src=me._button_on_off__img.ggNormalSrc;
		}
		me._button_on_off.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_on_off);
		el=me._button_50=document.createElement('div');
		els=me._button_50__img=document.createElement('img');
		els.className='ggskin ggskin_button_50';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_50__img.ggOverSrc=hs;
		el.ggId="Button 50";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 180px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_50.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_50.onclick=function (e) {
			me._button_on_off.style[domTransition]='none';
			me._button_on_off.style.visibility='hidden';
			me._button_on_off.ggVisible=false;
			me._button_50.style[domTransition]='none';
			me._button_50.style.visibility='hidden';
			me._button_50.ggVisible=false;
			me._button_75.style[domTransition]='none';
			me._button_75.style.visibility='hidden';
			me._button_75.ggVisible=false;
			me._button_100.style[domTransition]='none';
			me._button_100.style.visibility='hidden';
			me._button_100.ggVisible=false;
			me._map_container.style[domTransition]='none';
			me._map_container.ggParameter.sx=0.5;me._map_container.ggParameter.sy=0.5;
			me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
			me._map_container.style[domTransition]='none';
			me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
			me._map_container.ggVisible=true;
		}
		me._button_50.onmouseover=function (e) {
			me._button_50__img.src=me._button_50__img.ggOverSrc;
		}
		me._button_50.onmouseout=function (e) {
			me._button_50__img.src=me._button_50__img.ggNormalSrc;
		}
		me._button_50.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_50);
		el=me._button_75=document.createElement('div');
		els=me._button_75__img=document.createElement('img');
		els.className='ggskin ggskin_button_75';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_75__img.ggOverSrc=hs;
		el.ggId="Button 75";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 260px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_75.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_75.onclick=function (e) {
			me._button_on_off.style[domTransition]='none';
			me._button_on_off.style.visibility='hidden';
			me._button_on_off.ggVisible=false;
			me._button_50.style[domTransition]='none';
			me._button_50.style.visibility='hidden';
			me._button_50.ggVisible=false;
			me._button_75.style[domTransition]='none';
			me._button_75.style.visibility='hidden';
			me._button_75.ggVisible=false;
			me._button_100.style[domTransition]='none';
			me._button_100.style.visibility='hidden';
			me._button_100.ggVisible=false;
			me._map_container.style[domTransition]='none';
			me._map_container.ggParameter.sx=0.75;me._map_container.ggParameter.sy=0.75;
			me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
			me._map_container.style[domTransition]='none';
			me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
			me._map_container.ggVisible=true;
		}
		me._button_75.onmouseover=function (e) {
			me._button_75__img.src=me._button_75__img.ggOverSrc;
		}
		me._button_75.onmouseout=function (e) {
			me._button_75__img.src=me._button_75__img.ggNormalSrc;
		}
		me._button_75.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_75);
		el=me._button_100=document.createElement('div');
		els=me._button_100__img=document.createElement('img');
		els.className='ggskin ggskin_button_100';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_100__img.ggOverSrc=hs;
		el.ggId="Button 100";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 340px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_100.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_100.onclick=function (e) {
			me._button_on_off.style[domTransition]='none';
			me._button_on_off.style.visibility='hidden';
			me._button_on_off.ggVisible=false;
			me._button_50.style[domTransition]='none';
			me._button_50.style.visibility='hidden';
			me._button_50.ggVisible=false;
			me._button_75.style[domTransition]='none';
			me._button_75.style.visibility='hidden';
			me._button_75.ggVisible=false;
			me._button_100.style[domTransition]='none';
			me._button_100.style.visibility='hidden';
			me._button_100.ggVisible=false;
			me._map_container.style[domTransition]='none';
			me._map_container.ggParameter.sx=1;me._map_container.ggParameter.sy=1;
			me._map_container.style[domTransform]=parameterToTransform(me._map_container.ggParameter);
			me._map_container.style[domTransition]='none';
			me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
			me._map_container.ggVisible=true;
		}
		me._button_100.onmouseover=function (e) {
			me._button_100__img.src=me._button_100__img.ggOverSrc;
		}
		me._button_100.onmouseout=function (e) {
			me._button_100__img.src=me._button_100__img.ggNormalSrc;
		}
		me._button_100.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_100);
		el=me._button_den_office=document.createElement('div');
		els=me._button_den_office__img=document.createElement('img');
		els.className='ggskin ggskin_button_den_office';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAB4CAYAAABIMJgJAAAOwklEQVR4nO2de3BU1R3HP7tJeCQkJt3CSFsECgGLIyl0hHQUE0hC4hA0DM6IDgzRMNKxaEWnJXEGFBWUtmNUbAVFE1+tDhNABAUiNImKyaA0iShaKY8UOoUEEx6JeXL7xyWYzW42d/c+zt2b85m5M9l7zz3nu5vv3j333PP7HZeiKAjkx8AUYCIwHxgH/AgYDEQALnHSJDq4BHQC7UAjcAyoBnYA/wQaRAlzWWz4aCANmAXMBCYjTT3QUIBa4B/APmAv0GJV41YY3g1kALnAXCDG7AYlYUUz8B5QDJSi/jqYhpmGHwYsAX4HjDGrEYmjOA48B2wCLprRgBmGHwosA/6A2keXSIKlAfgTsB743siKjTb8AmAdcI2RlUoGLHXACuBtoyo0yvCjgQ1Alh'+
			'GVSSS92A0sBU7orcitXwsLUe+6pdklZpGJ6rGFeivSc4UfAvwFuEevCIkkCIqA+4DWUE4O1fAjgG3Ar0M52UyKioqoq6sTLSNoXC4XKSkppKSkiJYSDnwK5ABngj5TUZRgt7GKohxRbMYXX3yhTJgwQUF9sBG2W1ZWltLe3i764wwHjiiqF4Pyb7BX+F8AHwI/CeYkszl58iSJiYm0tob0K2c7pk+fzieffEJERIRoKXbnv0A6cFjrCcHctI4H9mAzswOsXr3aMWYHqKqqoqSkRLSMcOAnqJ4cr/UErYYfDnwA/CwEUabz1VdfiZZgOAcPHhQtIVz4Gao3h2sprMXwg1DnOmj+FlnN4MGDRUswHCe+JxMZj+rRfj80LYb/KzBdryIzcbuNeJxgL5z4nkxmOuoweUAi+zm+EMgzRI5AYmJibGeg5uZmLl0ydWJgv1y4'+
			'cIHY2FihGgwmDygD3uyrQCDDj0bDN8bujB07loMHD9puxGPnzp3ceeedlrd76NAhCgsLKSsro76+nnHjxpGdnU1+fj4xMY6Yuf0X4CP6mIYQyPAbgTgzFFnJsGHDiI+PFy3Dh2uvvdbyNouKirjnHu8H49XV1VRXV1NUVMTevXuZOHGi5boMJg7Vu36nuvT1O78Adf5C2NPR0SFagl/Onj1raXslJSU+Zu/JqVOnWLBggYWKTCUT8Pvz6c/w0ahTfCUOoby8nNtvv73fctXV1ZSXl1ugyBKeRvWyF/4Mvww5n90xbNq0idTUVM3lX3nlFfPEWMs1qF72oncffhjwe0vkSEzj888/p76+nqqqKh577LGgzq2vrzdHlBj+gDqsfiVcsLfh70aG5YUlbW1trF27ljfffJOjR4+GXM+4ceMMVCUcD6qn13fv6Gl4N7Dcak'+
			'US/Rw7dozk5GTOnAl+tmxPIiMjWbhQd4yF3XgIdajyEnj34TOAsSIUSfTR1NSk2+wAo0ePJjk52QBFtmIMMLv7RU/D51qtRGIMU6ZMobS0VHc9J06c4P777zdAke3I7f6j2/DRqEmSJGFKeno6H374oa46Ojs7eeGFF1i3znGj0tlcTgDWbfjZyIxgYU9aWppu0wPk5+dTXFysX5B9iEHtsl8xvMw44BDS0tJ46623NJX1eDy8//77ZGb6PlS/++672bNnj9HyRJIFPxh+lkAhEoO566672LJlS8AyLpeL8vJybrnlFnbt2sVNN93kUyYzM5OKigqzZFrNLFANPwJIFKtFYjTz5s0L2L2Jiopi0qRJV16XlZUxYcIEn3K33XYbFy+akubRahKBEW5gqmglEnMI1KePiYmhs7PzyuuIiAi2b9/uU66pqYnk5GS6urpM'+
			'02khv3IDvxStQmIeaWlpfocsExISiIqK8to3ceJEvzerX375JbNmOaLXm+TGxrGqEmNIT0/n5Zdf9tp37733+i27ePFiCgsLffZXVFSQm5trhjwrGe9GPl0dECxZsoRdu3YxcuRI5syZw4oVK/os++CDD7Jp0yaf/a+99hrLl4f17JOfu7FhnhmJOWRmZlJXV8eOHTv6LZuXl8czzzzjs1/LuTZmpBt1ETHJACEysr+4/R9obm722bd48WIj5VjNj7qHJR2LXfO7XHONvWNszp49y8qVK732DRkyhIKCAkGKDGGE9q97mNLQ0EBpaant0nRUVlaKlhCQvDzf7Czr16+3XfaHYHG84U+dOsXs2bP7Lyi5QmVlJe+++67XvvHjx7NkyRJBiozDXpc9iS144IEHfPY9++yzApQYjyMM75CngF6Iek/79+/nwIEDXvsSEx'+
			'OZM2eOED1G4wjDOylVdjft7e1C2vUXAPL8888LUGIOjjD8zJkzRUswnIyMDMvbLCsr80nTnZGRQVaWg2aPi1irxGjOnTunDB06VPhyNUZtqampQj7HnJwcHy3bt28XosUsHGF4RVGU2tpax6zx1Nraavnnd/ToUR8t8fHxSltbm+VazMQxw5LXX38933zzjSGr+CUkJLB27VpOnz6tqfyNN97I/PnzOX/+fMhtulwuUlNTufnmm0OuQw/+5sisWbOGQYMGCVBjHi5FMXbteSfQ2trK8OHDNQc+TJ48mZqaGpNVmcfhw4e9gkFA/RJ//PHHghSZhyNuWo1m0qRJQUX51NbWht1DmcbGRt555x1Wr15NWlqaz/H09HThCzaYgug+ld0oKSkJuf99+vRp0fL7paamRsnNzVXi4uL6fT8ej0dZsWKF0tjYKFq2YUjD92LM'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_den_office__img.ggOverSrc=hs;
		el.ggId="Button_Den_OFFICE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_den_office.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_den_office.onclick=function (e) {
			me._button_den_office.style[domTransition]='none';
			me._button_den_office.style.visibility='hidden';
			me._button_den_office.ggVisible=false;
			me._button_den_kids_room.style[domTransition]='none';
			me._button_den_kids_room.style.visibility=(Number(me._button_den_kids_room.style.opacity)>0||!me._button_den_kids_room.style.opacity)?'inherit':'hidden';
			me._button_den_kids_room.ggVisible=true;
			player.openNext("{"+me.ggUserdata.source+"_OFFICE}","$(cur)");
			player.setVariableValue('PKG', "_OFFICE");
		}
		me._button_den_office.onmouseover=function (e) {
			me._button_den_office__img.src=me._button_den_office__img.ggOverSrc;
		}
		me._button_den_office.onmouseout=function (e) {
			me._button_den_office__img.src=me._button_den_office__img.ggNormalSrc;
		}
		me._button_den_office.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_den_office);
		el=me._button_den_kids_room=document.createElement('div');
		els=me._button_den_kids_room__img=document.createElement('img');
		els.className='ggskin ggskin_button_den_kids_room';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_den_kids_room__img.ggOverSrc=hs;
		el.ggId="Button_Den_KIDS_ROOM";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_den_kids_room.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_den_kids_room.onclick=function (e) {
			me._button_den_kids_room.style[domTransition]='none';
			me._button_den_kids_room.style.visibility='hidden';
			me._button_den_kids_room.ggVisible=false;
			me._button_den_office.style[domTransition]='none';
			me._button_den_office.style.visibility=(Number(me._button_den_office.style.opacity)>0||!me._button_den_office.style.opacity)?'inherit':'hidden';
			me._button_den_office.ggVisible=true;
			player.openNext("{"+me.ggUserdata.source+"_KIDS_ROOM}","$(cur)");
			player.setVariableValue('PKG', "_KIDS_ROOM");
		}
		me._button_den_kids_room.onmouseover=function (e) {
			me._button_den_kids_room__img.src=me._button_den_kids_room__img.ggOverSrc;
		}
		me._button_den_kids_room.onmouseout=function (e) {
			me._button_den_kids_room__img.src=me._button_den_kids_room__img.ggNormalSrc;
		}
		me._button_den_kids_room.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_den_kids_room);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.callChildLogicBlocksHotspot_map_node_mouseover = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_node.logicBlock_backgroundcolor) {
						me._map_1.ggMarkerInstances[i]._map_node.logicBlock_backgroundcolor();
					}
					if (me._map_1.ggMarkerInstances[i]._map_node.logicBlock_bordercolor) {
						me._map_1.ggMarkerInstances[i]._map_node.logicBlock_bordercolor();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_node_changevisitednodes = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_node.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_node.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var levelLimit = 500;
			var level = 1;
			while (mapWidth > levelLimit && mapHeight > levelLimit) {
				levelLimit *= 2;
				if (mapDetails['width'] < levelLimit || mapDetails['height'] < levelLimit) break;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers();
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 12;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_node_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_node;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		me._map_1.callChildLogicBlocksHotspot_map_node_mouseover();
		me._map_1.callChildLogicBlocksHotspot_map_node_changevisitednodes();
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._button_on_off.style[domTransition]='none';
		me._button_on_off.style.visibility='hidden';
		me._button_on_off.ggVisible=false;
		me._button_50.style[domTransition]='none';
		me._button_50.style.visibility='hidden';
		me._button_50.ggVisible=false;
		me._button_75.style[domTransition]='none';
		me._button_75.style.visibility='hidden';
		me._button_75.ggVisible=false;
		me._button_100.style[domTransition]='none';
		me._button_100.style.visibility='hidden';
		me._button_100.ggVisible=false;
		me._button_den_office.style[domTransition]='none';
		me._button_den_office.style.visibility='hidden';
		me._button_den_office.ggVisible=false;
		player.setVariableValue('PKG', "_OFFICE");
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_stainless_appliances_mouseover = function(){
		if(hotspotTemplates['ht_Stainless_Appliances']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Stainless_Appliances'].length; i++) {
				if (hotspotTemplates['ht_Stainless_Appliances'][i]._t_stainless_appliances && hotspotTemplates['ht_Stainless_Appliances'][i]._t_stainless_appliances.logicBlock_visible) {
					hotspotTemplates['ht_Stainless_Appliances'][i]._t_stainless_appliances.logicBlock_visible();
				}
				if (hotspotTemplates['ht_Stainless_Appliances'][i]._i_stainless_appliances && hotspotTemplates['ht_Stainless_Appliances'][i]._i_stainless_appliances.logicBlock_scaling) {
					hotspotTemplates['ht_Stainless_Appliances'][i]._i_stainless_appliances.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_laundry_mouseover = function(){
		if(hotspotTemplates['ht_Laundry']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Laundry'].length; i++) {
				if (hotspotTemplates['ht_Laundry'][i]._t_laundry && hotspotTemplates['ht_Laundry'][i]._t_laundry.logicBlock_visible) {
					hotspotTemplates['ht_Laundry'][i]._t_laundry.logicBlock_visible();
				}
				if (hotspotTemplates['ht_Laundry'][i]._i_laundry && hotspotTemplates['ht_Laundry'][i]._i_laundry.logicBlock_scaling) {
					hotspotTemplates['ht_Laundry'][i]._i_laundry.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_granite_countertops_mouseover = function(){
		if(hotspotTemplates['ht_Granite_Countertops']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Granite_Countertops'].length; i++) {
				if (hotspotTemplates['ht_Granite_Countertops'][i]._t_granite_countertops && hotspotTemplates['ht_Granite_Countertops'][i]._t_granite_countertops.logicBlock_visible) {
					hotspotTemplates['ht_Granite_Countertops'][i]._t_granite_countertops.logicBlock_visible();
				}
				if (hotspotTemplates['ht_Granite_Countertops'][i]._i_granite_countertops && hotspotTemplates['ht_Granite_Countertops'][i]._i_granite_countertops.logicBlock_scaling) {
					hotspotTemplates['ht_Granite_Countertops'][i]._i_granite_countertops.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_builtin_wardrobe_mouseover = function(){
		if(hotspotTemplates['ht_Built-In_Wardrobe']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Built-In_Wardrobe'].length; i++) {
				if (hotspotTemplates['ht_Built-In_Wardrobe'][i]._t_builtin_wardrobe && hotspotTemplates['ht_Built-In_Wardrobe'][i]._t_builtin_wardrobe.logicBlock_visible) {
					hotspotTemplates['ht_Built-In_Wardrobe'][i]._t_builtin_wardrobe.logicBlock_visible();
				}
				if (hotspotTemplates['ht_Built-In_Wardrobe'][i]._i_builtin_wardrobe && hotspotTemplates['ht_Built-In_Wardrobe'][i]._i_builtin_wardrobe.logicBlock_scaling) {
					hotspotTemplates['ht_Built-In_Wardrobe'][i]._i_builtin_wardrobe.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_hardwood_flooring_mouseover = function(){
		if(hotspotTemplates['ht_Hardwood_Flooring']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Hardwood_Flooring'].length; i++) {
				if (hotspotTemplates['ht_Hardwood_Flooring'][i]._t_hardwood_flooring && hotspotTemplates['ht_Hardwood_Flooring'][i]._t_hardwood_flooring.logicBlock_visible) {
					hotspotTemplates['ht_Hardwood_Flooring'][i]._t_hardwood_flooring.logicBlock_visible();
				}
				if (hotspotTemplates['ht_Hardwood_Flooring'][i]._i_hardwood_flooring && hotspotTemplates['ht_Hardwood_Flooring'][i]._i_hardwood_flooring.logicBlock_scaling) {
					hotspotTemplates['ht_Hardwood_Flooring'][i]._i_hardwood_flooring.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tile_backsplash_mouseover = function(){
		if(hotspotTemplates['ht_Tile_Backsplash']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Tile_Backsplash'].length; i++) {
				if (hotspotTemplates['ht_Tile_Backsplash'][i]._t_tile_backsplash && hotspotTemplates['ht_Tile_Backsplash'][i]._t_tile_backsplash.logicBlock_visible) {
					hotspotTemplates['ht_Tile_Backsplash'][i]._t_tile_backsplash.logicBlock_visible();
				}
				if (hotspotTemplates['ht_Tile_Backsplash'][i]._i_tile_backsplash && hotspotTemplates['ht_Tile_Backsplash'][i]._i_tile_backsplash.logicBlock_scaling) {
					hotspotTemplates['ht_Tile_Backsplash'][i]._i_tile_backsplash.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_tile_flooring_mouseover = function(){
		if(hotspotTemplates['ht_Tile_Flooring']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Tile_Flooring'].length; i++) {
				if (hotspotTemplates['ht_Tile_Flooring'][i]._t_tile_flooring && hotspotTemplates['ht_Tile_Flooring'][i]._t_tile_flooring.logicBlock_visible) {
					hotspotTemplates['ht_Tile_Flooring'][i]._t_tile_flooring.logicBlock_visible();
				}
				if (hotspotTemplates['ht_Tile_Flooring'][i]._i_tile_flooring && hotspotTemplates['ht_Tile_Flooring'][i]._i_tile_flooring.logicBlock_scaling) {
					hotspotTemplates['ht_Tile_Flooring'][i]._i_tile_flooring.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_high_ceiling_mouseover = function(){
		if(hotspotTemplates['ht_high_ceiling']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_high_ceiling'].length; i++) {
				if (hotspotTemplates['ht_high_ceiling'][i]._t_high_ceiling && hotspotTemplates['ht_high_ceiling'][i]._t_high_ceiling.logicBlock_visible) {
					hotspotTemplates['ht_high_ceiling'][i]._t_high_ceiling.logicBlock_visible();
				}
				if (hotspotTemplates['ht_high_ceiling'][i]._i_high_ceiling && hotspotTemplates['ht_high_ceiling'][i]._i_high_ceiling.logicBlock_scaling) {
					hotspotTemplates['ht_high_ceiling'][i]._i_high_ceiling.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_ani', true);
			} else {
				player.setVariableValue('ht_ani', false);
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeD0iMHB4IiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 150px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -400px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-2px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeD0iMHB4IiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 150px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -400px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeD0iMHB4IiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 150px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -400px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,2px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 10px; transform:translate3d(0px,0px,90px) rotateX(-90deg); transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='font-size: 16px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 200px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_tooltip') == false)) && 
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=(vs.height / 3);
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_stainless_appliances(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_stainless_appliances=document.createElement('div');
		el.ggId="ht_Stainless_Appliances";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 93px;';
		hs+='position : absolute;';
		hs+='top : 424px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_stainless_appliances.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_stainless_appliances.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_stainless_appliances.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_stainless_appliances.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_stainless_appliances']=true;
			me._t_stainless_appliances.logicBlock_visible();
			me._i_stainless_appliances.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_stainless_appliances.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_stainless_appliances']=false;
			me._t_stainless_appliances.logicBlock_visible();
			me._i_stainless_appliances.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_stainless_appliances.ontouchend=function (e) {
			me.elementMouseOver['ht_stainless_appliances']=false;
			me._t_stainless_appliances.logicBlock_visible();
			me._i_stainless_appliances.logicBlock_scaling();
		}
		me._ht_stainless_appliances.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_stainless_appliances=document.createElement('div');
		els=me._t_stainless_appliances__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_stainless_appliances";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 127px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 133px;';
		hs+='height: 50px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Stainless Steel Appliances";
		el.appendChild(els);
		me._t_stainless_appliances.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_stainless_appliances.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_stainless_appliances'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_stainless_appliances.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_stainless_appliances.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_stainless_appliances.style[domTransition]='';
				if (me._t_stainless_appliances.ggCurrentLogicStateVisible == 0) {
					me._t_stainless_appliances.style.visibility=(Number(me._t_stainless_appliances.style.opacity)>0||!me._t_stainless_appliances.style.opacity)?'inherit':'hidden';
					me._t_stainless_appliances.ggVisible=true;
				}
				else {
					me._t_stainless_appliances.style.visibility="hidden";
					me._t_stainless_appliances.ggVisible=false;
				}
			}
		}
		me._t_stainless_appliances.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_stainless_appliances.appendChild(me._t_stainless_appliances);
		el=me._i_stainless_appliances=document.createElement('div');
		els=me._i_stainless_appliances__img=document.createElement('img');
		els.className='ggskin ggskin_i_stainless_appliances';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_stainless_appliances";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_stainless_appliances.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_stainless_appliances.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_stainless_appliances'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_stainless_appliances.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_stainless_appliances.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_stainless_appliances.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_stainless_appliances.ggCurrentLogicStateScaling == 0) {
					me._i_stainless_appliances.ggParameter.sx = 1.2;
					me._i_stainless_appliances.ggParameter.sy = 1.2;
					me._i_stainless_appliances.style[domTransform]=parameterToTransform(me._i_stainless_appliances.ggParameter);
				}
				else {
					me._i_stainless_appliances.ggParameter.sx = 1;
					me._i_stainless_appliances.ggParameter.sy = 1;
					me._i_stainless_appliances.style[domTransform]=parameterToTransform(me._i_stainless_appliances.ggParameter);
				}
			}
		}
		me._i_stainless_appliances.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_stainless_appliances.appendChild(me._i_stainless_appliances);
		me.__div = me._ht_stainless_appliances;
	};
	function SkinHotspotClass_ht_laundry(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_laundry=document.createElement('div');
		el.ggId="ht_Laundry";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 272px;';
		hs+='position : absolute;';
		hs+='top : 424px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_laundry.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_laundry.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_laundry.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_laundry.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_laundry']=true;
			me._t_laundry.logicBlock_visible();
			me._i_laundry.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_laundry.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_laundry']=false;
			me._t_laundry.logicBlock_visible();
			me._i_laundry.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_laundry.ontouchend=function (e) {
			me.elementMouseOver['ht_laundry']=false;
			me._t_laundry.logicBlock_visible();
			me._i_laundry.logicBlock_scaling();
		}
		me._ht_laundry.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_laundry=document.createElement('div');
		els=me._t_laundry__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_laundry";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 45px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="In-Suite Laundry";
		el.appendChild(els);
		me._t_laundry.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_laundry.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_laundry'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_laundry.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_laundry.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_laundry.style[domTransition]='';
				if (me._t_laundry.ggCurrentLogicStateVisible == 0) {
					me._t_laundry.style.visibility=(Number(me._t_laundry.style.opacity)>0||!me._t_laundry.style.opacity)?'inherit':'hidden';
					me._t_laundry.ggVisible=true;
				}
				else {
					me._t_laundry.style.visibility="hidden";
					me._t_laundry.ggVisible=false;
				}
			}
		}
		me._t_laundry.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_laundry.appendChild(me._t_laundry);
		el=me._i_laundry=document.createElement('div');
		els=me._i_laundry__img=document.createElement('img');
		els.className='ggskin ggskin_i_laundry';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_laundry";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_laundry.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_laundry.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_laundry'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_laundry.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_laundry.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_laundry.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_laundry.ggCurrentLogicStateScaling == 0) {
					me._i_laundry.ggParameter.sx = 1.2;
					me._i_laundry.ggParameter.sy = 1.2;
					me._i_laundry.style[domTransform]=parameterToTransform(me._i_laundry.ggParameter);
				}
				else {
					me._i_laundry.ggParameter.sx = 1;
					me._i_laundry.ggParameter.sy = 1;
					me._i_laundry.style[domTransform]=parameterToTransform(me._i_laundry.ggParameter);
				}
			}
		}
		me._i_laundry.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_laundry.appendChild(me._i_laundry);
		me.__div = me._ht_laundry;
	};
	function SkinHotspotClass_ht_granite_countertops(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_granite_countertops=document.createElement('div');
		el.ggId="ht_Granite_Countertops";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 424px;';
		hs+='position : absolute;';
		hs+='top : 424px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_granite_countertops.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_granite_countertops.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_granite_countertops.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_granite_countertops.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_granite_countertops']=true;
			me._t_granite_countertops.logicBlock_visible();
			me._i_granite_countertops.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_granite_countertops.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_granite_countertops']=false;
			me._t_granite_countertops.logicBlock_visible();
			me._i_granite_countertops.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_granite_countertops.ontouchend=function (e) {
			me.elementMouseOver['ht_granite_countertops']=false;
			me._t_granite_countertops.logicBlock_visible();
			me._i_granite_countertops.logicBlock_scaling();
		}
		me._ht_granite_countertops.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_granite_countertops=document.createElement('div');
		els=me._t_granite_countertops__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_granite_countertops";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 45px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Granite Countertops";
		el.appendChild(els);
		me._t_granite_countertops.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_granite_countertops.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_granite_countertops'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_granite_countertops.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_granite_countertops.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_granite_countertops.style[domTransition]='';
				if (me._t_granite_countertops.ggCurrentLogicStateVisible == 0) {
					me._t_granite_countertops.style.visibility=(Number(me._t_granite_countertops.style.opacity)>0||!me._t_granite_countertops.style.opacity)?'inherit':'hidden';
					me._t_granite_countertops.ggVisible=true;
				}
				else {
					me._t_granite_countertops.style.visibility="hidden";
					me._t_granite_countertops.ggVisible=false;
				}
			}
		}
		me._t_granite_countertops.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_granite_countertops.appendChild(me._t_granite_countertops);
		el=me._i_granite_countertops=document.createElement('div');
		els=me._i_granite_countertops__img=document.createElement('img');
		els.className='ggskin ggskin_i_granite_countertops';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_granite_countertops";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_granite_countertops.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_granite_countertops.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_granite_countertops'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_granite_countertops.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_granite_countertops.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_granite_countertops.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_granite_countertops.ggCurrentLogicStateScaling == 0) {
					me._i_granite_countertops.ggParameter.sx = 1.2;
					me._i_granite_countertops.ggParameter.sy = 1.2;
					me._i_granite_countertops.style[domTransform]=parameterToTransform(me._i_granite_countertops.ggParameter);
				}
				else {
					me._i_granite_countertops.ggParameter.sx = 1;
					me._i_granite_countertops.ggParameter.sy = 1;
					me._i_granite_countertops.style[domTransform]=parameterToTransform(me._i_granite_countertops.ggParameter);
				}
			}
		}
		me._i_granite_countertops.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_granite_countertops.appendChild(me._i_granite_countertops);
		me.__div = me._ht_granite_countertops;
	};
	function SkinHotspotClass_ht_builtin_wardrobe(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_builtin_wardrobe=document.createElement('div');
		el.ggId="ht_Built-In_Wardrobe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 580px;';
		hs+='position : absolute;';
		hs+='top : 424px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_builtin_wardrobe.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_builtin_wardrobe.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_builtin_wardrobe.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_builtin_wardrobe.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_builtin_wardrobe']=true;
			me._t_builtin_wardrobe.logicBlock_visible();
			me._i_builtin_wardrobe.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_builtin_wardrobe.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_builtin_wardrobe']=false;
			me._t_builtin_wardrobe.logicBlock_visible();
			me._i_builtin_wardrobe.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_builtin_wardrobe.ontouchend=function (e) {
			me.elementMouseOver['ht_builtin_wardrobe']=false;
			me._t_builtin_wardrobe.logicBlock_visible();
			me._i_builtin_wardrobe.logicBlock_scaling();
		}
		me._ht_builtin_wardrobe.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_builtin_wardrobe=document.createElement('div');
		els=me._t_builtin_wardrobe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_built-in_wardrobe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 45px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Built-In Wardrobe";
		el.appendChild(els);
		me._t_builtin_wardrobe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_builtin_wardrobe.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_builtin_wardrobe'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_builtin_wardrobe.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_builtin_wardrobe.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_builtin_wardrobe.style[domTransition]='';
				if (me._t_builtin_wardrobe.ggCurrentLogicStateVisible == 0) {
					me._t_builtin_wardrobe.style.visibility=(Number(me._t_builtin_wardrobe.style.opacity)>0||!me._t_builtin_wardrobe.style.opacity)?'inherit':'hidden';
					me._t_builtin_wardrobe.ggVisible=true;
				}
				else {
					me._t_builtin_wardrobe.style.visibility="hidden";
					me._t_builtin_wardrobe.ggVisible=false;
				}
			}
		}
		me._t_builtin_wardrobe.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_builtin_wardrobe.appendChild(me._t_builtin_wardrobe);
		el=me._i_builtin_wardrobe=document.createElement('div');
		els=me._i_builtin_wardrobe__img=document.createElement('img');
		els.className='ggskin ggskin_i_builtin_wardrobe';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_built-in_wardrobe";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_builtin_wardrobe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_builtin_wardrobe.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_builtin_wardrobe'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_builtin_wardrobe.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_builtin_wardrobe.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_builtin_wardrobe.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_builtin_wardrobe.ggCurrentLogicStateScaling == 0) {
					me._i_builtin_wardrobe.ggParameter.sx = 1.2;
					me._i_builtin_wardrobe.ggParameter.sy = 1.2;
					me._i_builtin_wardrobe.style[domTransform]=parameterToTransform(me._i_builtin_wardrobe.ggParameter);
				}
				else {
					me._i_builtin_wardrobe.ggParameter.sx = 1;
					me._i_builtin_wardrobe.ggParameter.sy = 1;
					me._i_builtin_wardrobe.style[domTransform]=parameterToTransform(me._i_builtin_wardrobe.ggParameter);
				}
			}
		}
		me._i_builtin_wardrobe.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_builtin_wardrobe.appendChild(me._i_builtin_wardrobe);
		me.__div = me._ht_builtin_wardrobe;
	};
	function SkinHotspotClass_ht_hardwood_flooring(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_hardwood_flooring=document.createElement('div');
		el.ggId="ht_Hardwood_Flooring";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 726px;';
		hs+='position : absolute;';
		hs+='top : 424px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_hardwood_flooring.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_hardwood_flooring.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_hardwood_flooring.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_hardwood_flooring.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_hardwood_flooring']=true;
			me._t_hardwood_flooring.logicBlock_visible();
			me._i_hardwood_flooring.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_hardwood_flooring.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_hardwood_flooring']=false;
			me._t_hardwood_flooring.logicBlock_visible();
			me._i_hardwood_flooring.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_hardwood_flooring.ontouchend=function (e) {
			me.elementMouseOver['ht_hardwood_flooring']=false;
			me._t_hardwood_flooring.logicBlock_visible();
			me._i_hardwood_flooring.logicBlock_scaling();
		}
		me._ht_hardwood_flooring.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_hardwood_flooring=document.createElement('div');
		els=me._t_hardwood_flooring__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_hardwood_flooring";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 45px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Hardwood Flooring";
		el.appendChild(els);
		me._t_hardwood_flooring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_hardwood_flooring.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_hardwood_flooring'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_hardwood_flooring.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_hardwood_flooring.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_hardwood_flooring.style[domTransition]='';
				if (me._t_hardwood_flooring.ggCurrentLogicStateVisible == 0) {
					me._t_hardwood_flooring.style.visibility=(Number(me._t_hardwood_flooring.style.opacity)>0||!me._t_hardwood_flooring.style.opacity)?'inherit':'hidden';
					me._t_hardwood_flooring.ggVisible=true;
				}
				else {
					me._t_hardwood_flooring.style.visibility="hidden";
					me._t_hardwood_flooring.ggVisible=false;
				}
			}
		}
		me._t_hardwood_flooring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_hardwood_flooring.appendChild(me._t_hardwood_flooring);
		el=me._i_hardwood_flooring=document.createElement('div');
		els=me._i_hardwood_flooring__img=document.createElement('img');
		els.className='ggskin ggskin_i_hardwood_flooring';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_hardwood_flooring";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_hardwood_flooring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_hardwood_flooring.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_hardwood_flooring'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_hardwood_flooring.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_hardwood_flooring.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_hardwood_flooring.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_hardwood_flooring.ggCurrentLogicStateScaling == 0) {
					me._i_hardwood_flooring.ggParameter.sx = 1.2;
					me._i_hardwood_flooring.ggParameter.sy = 1.2;
					me._i_hardwood_flooring.style[domTransform]=parameterToTransform(me._i_hardwood_flooring.ggParameter);
				}
				else {
					me._i_hardwood_flooring.ggParameter.sx = 1;
					me._i_hardwood_flooring.ggParameter.sy = 1;
					me._i_hardwood_flooring.style[domTransform]=parameterToTransform(me._i_hardwood_flooring.ggParameter);
				}
			}
		}
		me._i_hardwood_flooring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_hardwood_flooring.appendChild(me._i_hardwood_flooring);
		me.__div = me._ht_hardwood_flooring;
	};
	function SkinHotspotClass_ht_tile_backsplash(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tile_backsplash=document.createElement('div');
		el.ggId="ht_Tile_Backsplash";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 865px;';
		hs+='position : absolute;';
		hs+='top : 424px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tile_backsplash.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tile_backsplash.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_backsplash.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_backsplash.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_tile_backsplash']=true;
			me._t_tile_backsplash.logicBlock_visible();
			me._i_tile_backsplash.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_backsplash.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_tile_backsplash']=false;
			me._t_tile_backsplash.logicBlock_visible();
			me._i_tile_backsplash.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_backsplash.ontouchend=function (e) {
			me.elementMouseOver['ht_tile_backsplash']=false;
			me._t_tile_backsplash.logicBlock_visible();
			me._i_tile_backsplash.logicBlock_scaling();
		}
		me._ht_tile_backsplash.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_tile_backsplash=document.createElement('div');
		els=me._t_tile_backsplash__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_Tile_Backsplash";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 45px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Tile<br\/>Backsplash";
		el.appendChild(els);
		me._t_tile_backsplash.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_tile_backsplash.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_tile_backsplash'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_tile_backsplash.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_tile_backsplash.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_tile_backsplash.style[domTransition]='';
				if (me._t_tile_backsplash.ggCurrentLogicStateVisible == 0) {
					me._t_tile_backsplash.style.visibility=(Number(me._t_tile_backsplash.style.opacity)>0||!me._t_tile_backsplash.style.opacity)?'inherit':'hidden';
					me._t_tile_backsplash.ggVisible=true;
				}
				else {
					me._t_tile_backsplash.style.visibility="hidden";
					me._t_tile_backsplash.ggVisible=false;
				}
			}
		}
		me._t_tile_backsplash.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tile_backsplash.appendChild(me._t_tile_backsplash);
		el=me._i_tile_backsplash=document.createElement('div');
		els=me._i_tile_backsplash__img=document.createElement('img');
		els.className='ggskin ggskin_i_tile_backsplash';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_Tile_Backsplash";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_tile_backsplash.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_tile_backsplash.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_tile_backsplash'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_tile_backsplash.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_tile_backsplash.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_tile_backsplash.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_tile_backsplash.ggCurrentLogicStateScaling == 0) {
					me._i_tile_backsplash.ggParameter.sx = 1.2;
					me._i_tile_backsplash.ggParameter.sy = 1.2;
					me._i_tile_backsplash.style[domTransform]=parameterToTransform(me._i_tile_backsplash.ggParameter);
				}
				else {
					me._i_tile_backsplash.ggParameter.sx = 1;
					me._i_tile_backsplash.ggParameter.sy = 1;
					me._i_tile_backsplash.style[domTransform]=parameterToTransform(me._i_tile_backsplash.ggParameter);
				}
			}
		}
		me._i_tile_backsplash.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tile_backsplash.appendChild(me._i_tile_backsplash);
		me.__div = me._ht_tile_backsplash;
	};
	function SkinHotspotClass_ht_tile_flooring(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_tile_flooring=document.createElement('div');
		el.ggId="ht_Tile_Flooring";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 89px;';
		hs+='position : absolute;';
		hs+='top : 538px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_tile_flooring.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_tile_flooring.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_flooring.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_flooring.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_tile_flooring']=true;
			me._t_tile_flooring.logicBlock_visible();
			me._i_tile_flooring.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_flooring.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_tile_flooring']=false;
			me._t_tile_flooring.logicBlock_visible();
			me._i_tile_flooring.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_tile_flooring.ontouchend=function (e) {
			me.elementMouseOver['ht_tile_flooring']=false;
			me._t_tile_flooring.logicBlock_visible();
			me._i_tile_flooring.logicBlock_scaling();
		}
		me._ht_tile_flooring.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_tile_flooring=document.createElement('div');
		els=me._t_tile_flooring__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_Tile_Flooring";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 45px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Tile<br\/>Flooring";
		el.appendChild(els);
		me._t_tile_flooring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_tile_flooring.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_tile_flooring'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_tile_flooring.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_tile_flooring.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_tile_flooring.style[domTransition]='';
				if (me._t_tile_flooring.ggCurrentLogicStateVisible == 0) {
					me._t_tile_flooring.style.visibility=(Number(me._t_tile_flooring.style.opacity)>0||!me._t_tile_flooring.style.opacity)?'inherit':'hidden';
					me._t_tile_flooring.ggVisible=true;
				}
				else {
					me._t_tile_flooring.style.visibility="hidden";
					me._t_tile_flooring.ggVisible=false;
				}
			}
		}
		me._t_tile_flooring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_tile_flooring.appendChild(me._t_tile_flooring);
		el=me._i_tile_flooring=document.createElement('div');
		els=me._i_tile_flooring__img=document.createElement('img');
		els.className='ggskin ggskin_i_tile_flooring';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_Tile_Flooring";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_tile_flooring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_tile_flooring.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_tile_flooring'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_tile_flooring.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_tile_flooring.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_tile_flooring.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_tile_flooring.ggCurrentLogicStateScaling == 0) {
					me._i_tile_flooring.ggParameter.sx = 1.2;
					me._i_tile_flooring.ggParameter.sy = 1.2;
					me._i_tile_flooring.style[domTransform]=parameterToTransform(me._i_tile_flooring.ggParameter);
				}
				else {
					me._i_tile_flooring.ggParameter.sx = 1;
					me._i_tile_flooring.ggParameter.sy = 1;
					me._i_tile_flooring.style[domTransform]=parameterToTransform(me._i_tile_flooring.ggParameter);
				}
			}
		}
		me._i_tile_flooring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_tile_flooring.appendChild(me._i_tile_flooring);
		me.__div = me._ht_tile_flooring;
	};
	function SkinHotspotClass_ht_high_ceiling(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_high_ceiling=document.createElement('div');
		el.ggId="ht_high_ceiling";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 251px;';
		hs+='position : absolute;';
		hs+='top : 538px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_high_ceiling.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_high_ceiling.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_high_ceiling.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_high_ceiling.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_high_ceiling']=true;
			me._t_high_ceiling.logicBlock_visible();
			me._i_high_ceiling.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_high_ceiling.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_high_ceiling']=false;
			me._t_high_ceiling.logicBlock_visible();
			me._i_high_ceiling.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_high_ceiling.ontouchend=function (e) {
			me.elementMouseOver['ht_high_ceiling']=false;
			me._t_high_ceiling.logicBlock_visible();
			me._i_high_ceiling.logicBlock_scaling();
		}
		me._ht_high_ceiling.ggUpdatePosition=function (useTransition) {
		}
		el=me._t_high_ceiling=document.createElement('div');
		els=me._t_high_ceiling__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t_high_ceiling";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 45px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 3px solid #ffffff;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="High<br\/>Ceilings";
		el.appendChild(els);
		me._t_high_ceiling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._t_high_ceiling.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_high_ceiling'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._t_high_ceiling.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._t_high_ceiling.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._t_high_ceiling.style[domTransition]='';
				if (me._t_high_ceiling.ggCurrentLogicStateVisible == 0) {
					me._t_high_ceiling.style.visibility=(Number(me._t_high_ceiling.style.opacity)>0||!me._t_high_ceiling.style.opacity)?'inherit':'hidden';
					me._t_high_ceiling.ggVisible=true;
				}
				else {
					me._t_high_ceiling.style.visibility="hidden";
					me._t_high_ceiling.ggVisible=false;
				}
			}
		}
		me._t_high_ceiling.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_high_ceiling.appendChild(me._t_high_ceiling);
		el=me._i_high_ceiling=document.createElement('div');
		els=me._i_high_ceiling__img=document.createElement('img');
		els.className='ggskin ggskin_i_high_ceiling';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACfUlEQVRogd2aMU/bQBiGnxxrxFI6lK6NYSgSAxV/BKn5D1GRKtHRPyFTOxopoDJlRagDawYklqithIIspgKRWAo3gaLr4LvIcWMS7LMd+5G+yY6/583FsXx3NexRA94DG4ADvAVWgLo+LoE74A8wAH4CvwBl0SEVy8BHYB/4DYwI5J6rkT53X392OXfrEJvAN+CW2eKz6lZfazPPAO+AAwvycXWge2TKZ4LfelYhTEndyzqvgZMcAkTrRPe2wgZwVUAIU1faIRUfgIcCQ5h60C6JWFuQEOEway8N8Qq4WQD5aN1ot7k5TdvUdV3l+75SSikpper1eqrZbNoIczpviN20zdrttpqGlNJWmN1ZId4Aj2maOI6jpJRTgyilVL/ftxHkUbvG8j1tk1arFR'+
			'vCYCGI0q5TcWw0cBzn2RC+79sKorQzACIU5FNcwpcwGAzodruxxzudjo02hv+c68Bf7H1TyvO8iXtlOBwq13VtjobSzuZ9B4Adyw0m7hlL/1RxtWNCLAGdDBtlXR1gSQANYBuLeJ6HUmpqZcA20BDAFrCeRYecWAe2zIiUnYYAVou2sMCqIJiyKTsrgsj/cEmpi9nnlANBMGNRdqQgmMYsO3cCuC7awgLXArgs2sIClwI4By6KNknBBXBuRuSsYJk0nKFHZAQcFyyThmNgZJ4jP4D7AmWSck/gPn7VlcBhYTrJOUQ/B8NP9q/FuKRi7BwOMgCO8ndJzBGBMzAZBOAL8JSrTjKeCFzHRIPcAHu56SRnj8B1JqknsTOsuSexoULLClCRhR5DJZbeDJVYDDVUYnk6TOk3DISpxBaOMKXfVBNlIbY51dJeIHKtwjae/QPz'+
			'QUXXGCE+xAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="i_high_ceiling";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._i_high_ceiling.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._i_high_ceiling.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_high_ceiling'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._i_high_ceiling.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._i_high_ceiling.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._i_high_ceiling.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._i_high_ceiling.ggCurrentLogicStateScaling == 0) {
					me._i_high_ceiling.ggParameter.sx = 1.2;
					me._i_high_ceiling.ggParameter.sy = 1.2;
					me._i_high_ceiling.style[domTransform]=parameterToTransform(me._i_high_ceiling.ggParameter);
				}
				else {
					me._i_high_ceiling.ggParameter.sx = 1;
					me._i_high_ceiling.ggParameter.sy = 1;
					me._i_high_ceiling.style[domTransform]=parameterToTransform(me._i_high_ceiling.ggParameter);
				}
			}
		}
		me._i_high_ceiling.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_high_ceiling.appendChild(me._i_high_ceiling);
		me.__div = me._ht_high_ceiling;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		} else
		if (hotspot.skinid=='ht_Stainless_Appliances') {
			hotspot.skinid = 'ht_Stainless_Appliances';
			hsinst = new SkinHotspotClass_ht_stainless_appliances(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_stainless_appliances_mouseover();;
		} else
		if (hotspot.skinid=='ht_Laundry') {
			hotspot.skinid = 'ht_Laundry';
			hsinst = new SkinHotspotClass_ht_laundry(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_laundry_mouseover();;
		} else
		if (hotspot.skinid=='ht_Granite_Countertops') {
			hotspot.skinid = 'ht_Granite_Countertops';
			hsinst = new SkinHotspotClass_ht_granite_countertops(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_granite_countertops_mouseover();;
		} else
		if (hotspot.skinid=='ht_Built-In_Wardrobe') {
			hotspot.skinid = 'ht_Built-In_Wardrobe';
			hsinst = new SkinHotspotClass_ht_builtin_wardrobe(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_builtin_wardrobe_mouseover();;
		} else
		if (hotspot.skinid=='ht_Hardwood_Flooring') {
			hotspot.skinid = 'ht_Hardwood_Flooring';
			hsinst = new SkinHotspotClass_ht_hardwood_flooring(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_hardwood_flooring_mouseover();;
		} else
		if (hotspot.skinid=='ht_Tile_Backsplash') {
			hotspot.skinid = 'ht_Tile_Backsplash';
			hsinst = new SkinHotspotClass_ht_tile_backsplash(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tile_backsplash_mouseover();;
		} else
		if (hotspot.skinid=='ht_Tile_Flooring') {
			hotspot.skinid = 'ht_Tile_Flooring';
			hsinst = new SkinHotspotClass_ht_tile_flooring(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_tile_flooring_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_high_ceiling';
			hsinst = new SkinHotspotClass_ht_high_ceiling(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_high_ceiling_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Stainless_Appliances']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Stainless_Appliances'].length; i++) {
				hotspotTemplates['ht_Stainless_Appliances'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Laundry']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Laundry'].length; i++) {
				hotspotTemplates['ht_Laundry'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Granite_Countertops']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Granite_Countertops'].length; i++) {
				hotspotTemplates['ht_Granite_Countertops'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Built-In_Wardrobe']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Built-In_Wardrobe'].length; i++) {
				hotspotTemplates['ht_Built-In_Wardrobe'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Hardwood_Flooring']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Hardwood_Flooring'].length; i++) {
				hotspotTemplates['ht_Hardwood_Flooring'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Tile_Backsplash']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Tile_Backsplash'].length; i++) {
				hotspotTemplates['ht_Tile_Backsplash'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Tile_Flooring']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Tile_Flooring'].length; i++) {
				hotspotTemplates['ht_Tile_Flooring'][i] = null;
			}
		}
		if(hotspotTemplates['ht_high_ceiling']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_high_ceiling'].length; i++) {
				hotspotTemplates['ht_high_ceiling'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_map_node_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_node=document.createElement('div');
		el.ggId="map_node";
		el.ggDx=-14;
		el.ggDy=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #bd9f88;';
		hs+='border : 6px solid #4b4b4b;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.nodeVisited(me._map_node.ggElementNodeId()) == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_node.style[domTransition]='opacity 0s, background-color 0s, border-color 0s';
				if (me._map_node.ggCurrentLogicStateAlpha == 0) {
					me._map_node.style.visibility=me._map_node.ggVisible?'inherit':'hidden';
					me._map_node.style.opacity=1;
				}
				else {
					me._map_node.style.visibility=me._map_node.ggVisible?'inherit':'hidden';
					me._map_node.style.opacity=1;
				}
			}
		}
		me._map_node.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['map_node'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_node.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_node.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_node.style[domTransition]='opacity 0s, background-color 0s, border-color 0s';
				if (me._map_node.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_node.style.backgroundColor="rgba(75,75,75,1)";
				}
				else {
					me._map_node.style.backgroundColor="rgba(189,159,136,1)";
				}
			}
		}
		me._map_node.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['map_node'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._map_node.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._map_node.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._map_node.style[domTransition]='opacity 0s, background-color 0s, border-color 0s';
				if (me._map_node.ggCurrentLogicStateBorderColor == 0) {
					me._map_node.style.borderColor="rgba(189,159,136,1)";
				}
				else {
					me._map_node.style.borderColor="rgba(75,75,75,1)";
				}
			}
		}
		me._map_node.onclick=function (e) {
			player.openNext("{"+me.ggUserdata.source+""+player.getVariableValue('PKG')+"}","$(cur)");
		}
		me._map_node.onmouseover=function (e) {
			me.elementMouseOver['map_node']=true;
			me._map_node.logicBlock_backgroundcolor();
			me._map_node.logicBlock_bordercolor();
		}
		me._map_node.onmouseout=function (e) {
			me.elementMouseOver['map_node']=false;
			me._map_node.logicBlock_backgroundcolor();
			me._map_node.logicBlock_bordercolor();
		}
		me._map_node.ontouchend=function (e) {
			me.elementMouseOver['map_node']=false;
			me._map_node.logicBlock_backgroundcolor();
			me._map_node.logicBlock_bordercolor();
		}
		me._map_node.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._map_container.logicBlock_scaling();
	player.addListener('sizechanged', function(args) { me._map_container.logicBlock_scaling(); });
	player.addListener('mouseover', function(args) { me._map_1.callChildLogicBlocksHotspot_map_node_mouseover(); });
	player.addListener('changevisitednodes', function(args) { me._map_1.callChildLogicBlocksHotspot_map_node_changevisitednodes(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_stainless_appliances_mouseover();me.callChildLogicBlocksHotspot_ht_laundry_mouseover();me.callChildLogicBlocksHotspot_ht_granite_countertops_mouseover();me.callChildLogicBlocksHotspot_ht_builtin_wardrobe_mouseover();me.callChildLogicBlocksHotspot_ht_hardwood_flooring_mouseover();me.callChildLogicBlocksHotspot_ht_tile_backsplash_mouseover();me.callChildLogicBlocksHotspot_ht_tile_flooring_mouseover();me.callChildLogicBlocksHotspot_ht_high_ceiling_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};