(function(){
	
	// General Facebook helper class
	
	fbHelper = {
		
		appId: null,
		canvasPageUrl: null,
		channelUrl: null,

		
		// Initialise the Facebook JS SDK
		init: function(appId, canvasPageUrl, channelUrl){
			
			this.appId = appId;
			this.canvasPageUrl = canvasPageUrl;
			this.channelUrl = channelUrl;
			
			FB.init({
				appId: this.appId,
				cookie: true,
				status: true,
				xfbml: true,
				channelUrl: this.channelUrl
			});
			
		},
		
				
		
		// Ensures the user is logged in and has granted necessary permission
		
		ensureLogin: function(redirectBackTo, permissions, onSuccessCallBack){	
			
			var redirectUri = this.canvasPageUrl + ((!redirectBackTo) ? '' : redirectBackTo);
			permissions = (!permissions) ? '' : permissions;
			
			// Build the login url
			var loginUrl = 
				'https://graph.facebook.com/oauth/authorize?client_id=' + 
				this.appId + 
				'&redirect_uri=' + escape(redirectUri) + 
				'&scope=' + escape(permissions);
			
					
			FB.getLoginStatus(function(response){
				
				if (response.status != 'connected') {
					// User not connected so redirect to the login page
					top.location = loginUrl;
					return;
				}
					
				if (permissions == ''){
					// User is connected.
					// As there are no permissions to check, login status is a success
					if (onSuccessCallBack) onSuccessCallBack(response);
					return;
				}
				
				// Check to see whether the user has valid permissions
				var query = FB.Data.query('select {0} from permissions where uid={1}', permissions, response.session.uid);
				query.wait(function(rows) {
					
					if (rows.length != 1){
						top.location = loginUrl;
					}
					
					var permissionsArray = permissions.split(',');
					
					for (var i=0; i<permissionsArray.length; i++){
						
						var permission = permissionsArray[i];
						if (rows[0][permission] != 1){
							top.location = loginUrl;
							return;
						}
						
					}
					
					if (onSuccessCallBack) onSuccessCallBack(response);
					return;
					
				});
				
			});
			
		},
		
		
		
		// Returns basic profile about the current user
		getMe: function(onCompleteCallback){
			
			FB.api('/me', function(response) {
				
				if (onCompleteCallback)	onCompleteCallback(response);
				
			});
		
		},
		
		
		// Shows the Publish to Stream dialog
		showPublishToStreamDialog: function(options){
			
			// Default settings
			var settings = { 
				display: '',
				name: 'A name',
				caption: 'A caption',
				description: 'A description',
				linkUrl: "https://apps.facebook.com/",
				linkTitle: 'Visit site',
				userPrompt: 'Post a message to your wall',
				imageUrl: '',
				onSuccessCallBack: null,
				onFailureCallBack: null
			};
			
			$.extend(settings, options);
			
			// Add image if url passed
			var mediaDetails = [];
			if (settings.imageUrl && settings.imageUrl != ''){
				mediaDetails.push({ 
					'type': 'image', 
					'src': settings.imageUrl, 
					'href': settings.linkUrl
				});
			}
			
			
			// za pozivanje prijatelja
			FB.ui(
				{
					method: 'apprequests',
//					display: settings.display,
					// Always leave this blank for the user to add their personal message
					message: 'Dođite da zajedno igramo Keno igru na sreću. :) '
//					attachment: {
//						name: settings.name,
//						caption: settings.caption,
//						description: (settings.description),
//						href: settings.linkUrl,
//						media: mediaDetails
//					},
//					action_links: [
//						{ text: settings.linkTitle, href: settings.linkUrl }
//					],
//					user_message_prompt: settings.userPrompt
				},
				function(response) {
					if (response && response.post_id) {
						if (settings.onSuccessCallBack) settings.onSuccessCallBack(response);
					} 
					else {
						if (settings.onFailureCallBack) settings.onFailureCallBack(response);
					}
				}
			);
				
		},
		
		
		// Update a user's Facebook status.
		// The user must have granted the publish_to_stream extended permission
		updateStatus: function(statusText, onSuccessCallBack, onErrorCallBack){
						
			FB.api('/me/feed', 'post', { message: statusText }, function(response) {
        if (!response || response.error) {
					if (onErrorCallBack) onErrorCallBack(response);
        } 
				else {
					if (onSuccessCallBack) onSuccessCallBack(response);
				}
			});
			
		}
	
	}
	
})();