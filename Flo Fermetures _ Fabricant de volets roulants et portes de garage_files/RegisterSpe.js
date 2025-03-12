(function($){

	"use strict";

	var configue = {};

	//registre globals
	var globRegistre = {};

	//Obj
	window.RegisterSpe = function(){

	};

	/**
	 * [add description]
	 * @param {[type]} src      [description]
	 * @param {[type]} function [description]
	 */
	RegisterSpe.add = function(src, colback) 
	{
		//version
		if(
			typeof(configue.version) == "undefined"
			|| configue.version.length == 0
		)
		{
			configue.version = 1;
		}


		//base
		var src = "/"+configue.base +"/"+src;


		//si l'élément n'est pas déjà chargé
		if(typeof ( globRegistre[src] ) == 'undefined')
		{


			//stock colback
			globRegistre[src] = [colback];

			//ajoute le script
			$.ajaxSetup({
			  cache: true,
			  data: { "version": configue.version }
			});

			//extention
			var extention = src.split(".");
			extention = extention[ extention.length - 1 ];

			//
			if(extention == "js")
			{
				RegisterSpe.loadJS(src);
			}
			else if(extention == "css")
			{
				RegisterSpe.loadCSS(src);
			}

			
		}
		else
		{

			//stock le colback si js pas encore chargé
			if( typeof(globRegistre[src]) == "object" )
			{
				globRegistre[src].push(colback);
			}
			//script déja chargé
			else if(globRegistre[src] == "exec")
			{
				//exec colback
				if(typeof ( colback ) != 'undefined')
				{
					colback();
				}
			}

		}

	};

	/**
	 * [loadJS description]
	 * @param  {[type]} src     [description]
	 * @param  {[type]} colback [description]
	 */
	RegisterSpe.loadCSS = function(src)
	{
		//
		src = RegisterSpe.getPathWithVersion(src, configue.version);

		//
		var lien_css = document.createElement('link');
		lien_css.href = src;
		lien_css.rel = "stylesheet";
		lien_css.type = "text/css";
		document.getElementsByTagName("head")[0].appendChild(lien_css);

	}

	/**
	 * [loadJS description]
	 * @param  {[type]} src     [description]
	 * @param  {[type]} colback [description]
	 */
	RegisterSpe.loadJS = function(src)
	{
		//
		$.getScript(src).done(function()
		{

			//si pas un objet breack
			if( typeof(globRegistre[src]) != "object" )
			{
				return false;
			}


			//on éxécute tous les colbacks
			$.each(globRegistre[src], function(i, fonction)
			{
				//exec colback
				if(typeof ( fonction ) != 'undefined')
				{
					fonction();
				}
			});
				
			//delete
			globRegistre[src] = "exec";

		});
	}

	/**
	 * [setConfigue description]
	 * @param {[type]} params [description]
	 */
	RegisterSpe.setConfigue = function(params)
	{
		configue = params;
	}

	/**
	 * [getPathWithVersion description]
	 * @param  {[type]} src     [description]
	 * @param  {[type]} version [description]
	 * @return {[type]}         [description]
	 */
	RegisterSpe.getPathWithVersion = function(src, version)
	{
		//si pas déjà de paramètre
		if(src.indexOf("?") == -1)
		{
			src+= "?version="+version;
		}
		else
		{
			src+= "&version="+version;
		}
		
		//
		return src;
	}

})(jQuery);