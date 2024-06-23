!function(){var e,t,s,a,n,i,o={7729:function(e,t,s){"use strict";let a;var n=s(59772);let i=n.Ry({createdAt:n.hT().optional().default(new Date),updateAt:n.hT().optional().default(new Date),deletedAt:n.hT().optional()}),o=n.Z_();n.Ry({id:o,displayName:n.Z_().optional(),login:n.Z_(),type:n.Z_().optional(),broadcasterType:n.Z_().optional(),description:n.Z_().optional(),profileImageUrl:n.Z_().optional(),offlineImageUrl:n.Z_().optional(),metaComment:n.Z_().optional(),isSpam:n.O7().optional().default(!1),rowData:n.Z_().optional()}).and(i);let r=n.Ry({id:n.Rx().optional(),channelId:o,tpye:n.Km(["update","offline","online"]),broadcastTitle:n.Z_(),categoryId:n.Z_(),categoryName:n.Z_(),language:n.Z_(),timestamp:n.hT().default(new Date),rowdata:n.Z_().optional()}).and(i),l=n.Ry({type:n.Km(["chatters"]),value:n.Ry({users:n.IX(o).default([]),total:n.Rx().optional().default(0)})});n.Ry({type:n.Km(["live"]),value:n.Ry({isLive:n.O7().optional().default(!1),viewCount:n.Rx().optional().default(0),startedAt:n.hT().optional().nullable().default(null)})}),n.Ry({type:n.Km(["me"]),value:n.Ry({id:o,login:n.Z_()}).optional()}),s(2265);let d=n.Ry({user_id:o,user_login:n.Z_(),user_name:n.Z_()}),c=n.Ry({prefix:n.Z_(),bits:n.Rx(),tier:n.Rx()}),_=n.Ry({id:n.Z_(),emote_set_id:n.Z_(),owner_id:n.Z_(),format:n.Z_().array()}),u=n.Ry({type:n.Km(["text"]),text:n.Z_(),cheermote:c.optional(),emote:n.lB(),mention:n.lB()}),p=n.Ry({type:n.Km(["mention"]),text:n.Z_(),cheermote:c.optional(),emote:n.lB(),mention:d}),m=n.Ry({type:n.Km(["emote"]),text:n.Z_(),cheermote:c.optional(),emote:_,mention:n.lB()}),g=u.or(p).or(m),h=n.Ry({autoincrementId:n.Rx().optional(),id:n.Z_(),channel:n.Z_(),userId:o.nullable().default(null),timestamp:n.Rx().optional(),bits:n.Z_().optional(),rowdata:n.Z_().optional()}).and(i),v=n.Ry({messageType:n.Km(["chat"]),message:n.Z_(),fragments:g.array()}).and(h),y=n.Ry({messageType:n.Km(["reward","atutomatic-reward"]),rewardId:n.Z_(),userTitle:n.Z_(),userInput:n.Z_()}).and(h);v.or(y),n.Ry({id:n.Rx().optional(),channelId:n.Z_().optional(),gameId:n.Z_().optional(),broadcastTitle:n.Z_().max(140,"最大140文字まで入力可能です。").default(""),language:n.Z_(),tags:n.IX(n.Z_()).max(25,"最大のタグ数は25件までです。").default([]),classificationLabels:n.Z_().array().default([]),isBrandedContent:n.O7().default(!1),favorite:n.O7().optional().default(!1)}).and(i),n.Ry({id:n.Rx().optional(),channelId:o,userId:o,followedAt:n.hT()}).and(i),n.Ry({id:n.Z_(),name:n.Z_(),box_art_url:n.Z_().url(),igdb_id:n.Z_()}).and(i);var w=s(33427);s(91279);class f extends w.ZP{async getMe(){let e=await this.parameters.get("me");if((null==e?void 0:e.type)!=null&&"me"===e.type&&null!=e.value)return e.value}async getLive(){let e=await this.parameters.get("live");return(null==e?void 0:e.type)==null||"live"!==e.type||null==e.value?{isLive:!1,viewCount:0,startedAt:null}:e.value}async getChatters(){let e=await this.parameters.get("chatters");return(null==e?void 0:e.type)==null||"chatters"!==e.type||null==e.value?{users:[],total:0}:e.value}constructor(){super("twitch-comments"),this.version(30).stores({users:"id,*userId,displayName,type,broadcasterType",games:"id,igdb_id,name",actions:"++autoincrementId,id,*channel,messageType,*userId,*timestamp,[channel+timestamp]",followers:"++id,channelId,userId,[channelId+userId],createdAt,[channelId+createdAt]",channelHistories:"++id,channelId,type,categoryId,timestamp,[channelId+timestamp]",listenerHistories:"++id,channelId,userId,[channelId+timestamp]",broadcastTemplates:"++id,channelId,gameId,*tags,favorite",parameters:"type",spam:"login",settings:"id"})}}let b=new f;var T=s(62737),x=s.n(T);s(39055);var I=s(90748),E=s.n(I),O=s(86688),N=s.n(O),D=s(51470),A=s.n(D);x().extend(N()),x().extend(A()),x().extend(E()),x().locale("ja");let S=x(),k=e=>S(e.target).isSameOrBefore(S(e.current||new Date).subtract(e.num,e.ago));var P=s(12491);let{API_LIST:Z,API_KEY:R}={CLASSIFICATION_LABELS:[{name:"薬物・酩酊・過度の喫煙",id:"DrugsIntoxication",description:"タバコの過度な賛美・宣伝、マリファナの摂取・使用、合法薬物やアルコールによる酩酊、違法薬物の話題。"},{name:"性的なテーマ",id:"SexualThemes",description:"実際に金銭のやり取りが発生する、オンラインまたは対面式のギャンブル、ポーカー、ファンタジースポーツへの参加。"},{name:"著しい冒涜や下品な表現",id:"ProfanityVulgarity",description:"特に通常の会話内での、猥褻的・冒涜的・下品な表現の頻繁な使用。"},{name:"ギャンブル",id:"Gambling",description:"実際に金銭のやり取りが発生する、オンラインまたは対面式のギャンブル、ポーカー、ファンタジースポーツへの参加。"},{name:"暴力的で露骨な描写",id:"ViolentGraphic",description:"リアルな暴力、流血、重傷、死のシミュレーションや描写。"}],BROADCAST_LANGUAGE:[{id:"ja",name:"日本語"},{id:"en",name:"English"},{id:"id",name:"Bahasa Indonesia"},{id:"ca",name:"Catal\xe0"},{id:"da",name:"Dansk"},{id:"de",name:"Deutsch"},{id:"es",name:"Espa\xf1ol"},{id:"fr",name:"Fran\xe7ais"},{id:"it",name:"Italiano"},{id:"hu",name:"Magyar"},{id:"nl",name:"Nederlands"},{id:"no",name:"Norsk"},{id:"pl",name:"Polski"},{id:"pt",name:"Portugu\xeas"},{id:"ro",name:"Rom\xe2nă"},{id:"sk",name:"Slovenčina"},{id:"fi",name:"Suomi"},{id:"sv",name:"Svenska"},{id:"tl",name:"Tagalog"},{id:"vi",name:"Tiếng Việt"},{id:"tr",name:"T\xfcrk\xe7e"},{id:"cs",name:"Čeština"},{id:"el",name:"Ελληνικά"},{id:"bg",name:"Български"},{id:"ru",name:"Русский"},{id:"uk",name:"ภาษาไทย"},{id:"zh",name:"中文"},{id:"zh-hk",name:"粵語"},{id:"ko",name:"한국어"},{id:"asl",name:"American Sign Language"},{id:"other",name:"その他"}],API_LIST:{CONTENT_CLASSIFICATION_LABELS:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/content_classification_labels"},GAMES:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/games"},SCHEDULE:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/schedule"},POOL:{METHOD:"POST",ENDPOINT:"https://api.twitch.tv/helix/polls"},PREDICTIONS:{METHOD:"POST",ENDPOINT:"https://api.twitch.tv/helix/predictions"},USER:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/users"},CHAT:{CHATTERS:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/chat/chatters"}},CHANNELS:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/channels",PATCH:{METHOD:"PATCH",ENDPOINT:"https://api.twitch.tv/helix/channels"},FOLLOWERS:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/channels/followers"}},STREAMS:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/streams"},SEARCH:{CHANNELS:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/search/channels"},CATEGORIES:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/search/categories"}},ANALYTICS:{GAME:{METHOD:"GET",ENDPOINT:"https://api.twitch.tv/helix/analytics/games"}},EVENTSUB:{SUBSCRIPTIONS:{METHOD:"POST",ENDPOINT:"https://api.twitch.tv/helix/eventsub/subscriptions"}}},API_KEY:"of40zatnkd1ftcaqnf92ahqznkg1vn"},C=async()=>{let e=await b.settings.get("twitch_token");if(null==e)throw Error("twitch token is not found");return e.value},L=e=>{let t={Authorization:"Bearer ".concat(e),"Client-Id":R,"Content-Type":"application/json"};return function(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];let[n,i,...o]=s;return fetch(n,{...i,headers:{...t,...(null==i?void 0:i.headers)||{}}},...o)}},H=(e,t)=>async s=>{let{parameters:a,requestBody:n}=s,i=L(await C()),o=await i("https://api.twitch.tv/helix".concat(e,"?").concat(P.Z.stringify(a||{})),{method:t.toString().toUpperCase(),body:null==n?void 0:JSON.stringify(n)});return"patch"===t?{}:await o.json()},M={fetchByAll:e=>async t=>{let s=async t=>{var a;let n=await e(t);if((null===(a=n.pagination)||void 0===a?void 0:a.cursor)!=null){let e=await s({...t,parameters:{...t.parameters,after:n.pagination.cursor}});return{...e,data:[...n.data,...e.data]}}return n};return s(t)},createEventsub:async e=>await M.eventsub_subscriptions_post({requestBody:e}),channels_commercial_post:H("/channels/commercial","post"),channels_ads_get:H("/channels/ads","get"),channels_ads_schedule_snooze_post:H("/channels/ads/schedule/snooze","post"),analytics_extensions_get:H("/analytics/extensions","get"),analytics_games_get:H("/analytics/games","get"),bits_leaderboard_get:H("/bits/leaderboard","get"),bits_cheermotes_get:H("/bits/cheermotes","get"),extensions_transactions_get:H("/extensions/transactions","get"),channels_get:H("/channels","get"),channels_patch:H("/channels","patch"),channels_editors_get:H("/channels/editors","get"),channels_followed_get:H("/channels/followed","get"),channels_followers_get:H("/channels/followers","get"),channel_points_custom_rewards_post:H("/channel_points/custom_rewards","post"),channel_points_custom_rewards_delete:H("/channel_points/custom_rewards","delete"),channel_points_custom_rewards_get:H("/channel_points/custom_rewards","get"),channel_points_custom_rewards_redemptions_get:H("/channel_points/custom_rewards/redemptions","get"),channel_points_custom_rewards_patch:H("/channel_points/custom_rewards","patch"),channel_points_custom_rewards_redemptions_patch:H("/channel_points/custom_rewards/redemptions","patch"),charity_campaigns_get:H("/charity/campaigns","get"),charity_donations_get:H("/charity/donations","get"),chat_chatters_get:H("/chat/chatters","get"),chat_emotes_get:H("/chat/emotes","get"),chat_emotes_global_get:H("/chat/emotes/global","get"),chat_emotes_set_get:H("/chat/emotes/set","get"),chat_badges_get:H("/chat/badges","get"),chat_badges_global_get:H("/chat/badges/global","get"),chat_settings_get:H("/chat/settings","get"),chat_emotes_user_get:H("/chat/emotes/user","get"),chat_settings_patch:H("/chat/settings","patch"),chat_announcements_post:H("/chat/announcements","post"),chat_shoutouts_post:H("/chat/shoutouts","post"),chat_messages_post:H("/chat/messages","post"),chat_color_get:H("/chat/color","get"),chat_color_put:H("/chat/color","put"),clips_post:H("/clips","post"),clips_get:H("/clips","get"),eventsub_conduits_get:H("/eventsub/conduits","get"),eventsub_conduits_post:H("/eventsub/conduits","post"),eventsub_conduits_patch:H("/eventsub/conduits","patch"),eventsub_conduits_delete:H("/eventsub/conduits","delete"),eventsub_conduits_shards_get:H("/eventsub/conduits/shards","get"),eventsub_conduits_shards_patch:H("/eventsub/conduits/shards","patch"),content_classification_labels_get:H("/content_classification_labels","get"),entitlements_drops_get:H("/entitlements/drops","get"),entitlements_drops_patch:H("/entitlements/drops","patch"),extensions_configurations_get:H("/extensions/configurations","get"),extensions_configurations_put:H("/extensions/configurations","put"),extensions_required_configuration_put:H("/extensions/required_configuration","put"),extensions_pubsub_post:H("/extensions/pubsub","post"),extensions_live_get:H("/extensions/live","get"),extensions_jwt_secrets_get:H("/extensions/jwt/secrets","get"),extensions_jwt_secrets_post:H("/extensions/jwt/secrets","post"),extensions_chat_post:H("/extensions/chat","post"),extensions_get:H("/extensions","get"),extensions_released_get:H("/extensions/released","get"),bits_extensions_get:H("/bits/extensions","get"),bits_extensions_put:H("/bits/extensions","put"),eventsub_subscriptions_post:H("/eventsub/subscriptions","post"),eventsub_subscriptions_delete:H("/eventsub/subscriptions","delete"),eventsub_subscriptions_get:H("/eventsub/subscriptions","get"),games_top_get:H("/games/top","get"),games_get:H("/games","get"),goals_get:H("/goals","get"),guest_star_channel_settings_get:H("/guest_star/channel_settings","get"),guest_star_channel_settings_put:H("/guest_star/channel_settings","put"),guest_star_session_get:H("/guest_star/session","get"),guest_star_session_post:H("/guest_star/session","post"),guest_star_session_delete:H("/guest_star/session","delete"),guest_star_invites_get:H("/guest_star/invites","get"),guest_star_invites_post:H("/guest_star/invites","post"),guest_star_invites_delete:H("/guest_star/invites","delete"),guest_star_slot_post:H("/guest_star/slot","post"),guest_star_slot_patch:H("/guest_star/slot","patch"),guest_star_slot_delete:H("/guest_star/slot","delete"),guest_star_slot_settings_patch:H("/guest_star/slot_settings","patch"),hypetrain_events_get:H("/hypetrain/events","get"),moderation_enforcements_status_post:H("/moderation/enforcements/status","post"),moderation_automod_message_post:H("/moderation/automod/message","post"),moderation_automod_settings_get:H("/moderation/automod/settings","get"),moderation_automod_settings_put:H("/moderation/automod/settings","put"),moderation_banned_get:H("/moderation/banned","get"),moderation_bans_post:H("/moderation/bans","post"),moderation_bans_delete:H("/moderation/bans","delete"),moderation_unban_requests_get:H("/moderation/unban_requests","get"),moderation_unban_requests_patch:H("/moderation/unban_requests","patch"),moderation_blocked_terms_get:H("/moderation/blocked_terms","get"),moderation_blocked_terms_post:H("/moderation/blocked_terms","post"),moderation_blocked_terms_delete:H("/moderation/blocked_terms","delete"),moderation_chat_delete:H("/moderation/chat","delete"),moderation_channels_get:H("/moderation/channels","get"),moderation_moderators_get:H("/moderation/moderators","get"),moderation_moderators_post:H("/moderation/moderators","post"),moderation_moderators_delete:H("/moderation/moderators","delete"),channels_vips_get:H("/channels/vips","get"),channels_vips_post:H("/channels/vips","post"),channels_vips_delete:H("/channels/vips","delete"),moderation_shield_mode_put:H("/moderation/shield_mode","put"),moderation_shield_mode_get:H("/moderation/shield_mode","get"),polls_get:H("/polls","get"),polls_post:H("/polls","post"),polls_patch:H("/polls","patch"),predictions_get:H("/predictions","get"),predictions_post:H("/predictions","post"),predictions_patch:H("/predictions","patch"),raids_post:H("/raids","post"),raids_delete:H("/raids","delete"),schedule_get:H("/schedule","get"),schedule_icalendar_get:H("/schedule/icalendar","get"),schedule_settings_patch:H("/schedule/settings","patch"),schedule_segment_post:H("/schedule/segment","post"),schedule_segment_patch:H("/schedule/segment","patch"),schedule_segment_delete:H("/schedule/segment","delete"),search_categories_get:H("/search/categories","get"),search_channels_get:H("/search/channels","get"),streams_get:H("/streams","get"),streams_followed_get:H("/streams/followed","get"),streams_markers_post:H("/streams/markers","post"),streams_markers_get:H("/streams/markers","get"),subscriptions_get:H("/subscriptions","get"),subscriptions_user_get:H("/subscriptions/user","get"),tags_streams_get:H("/tags/streams","get"),streams_tags_get:H("/streams/tags","get"),teams_channel_get:H("/teams/channel","get"),teams_get:H("/teams","get"),users_get:H("/users","get"),users_put:H("/users","put"),users_blocks_get:H("/users/blocks","get"),users_blocks_put:H("/users/blocks","put"),users_blocks_delete:H("/users/blocks","delete"),users_extensions_list_get:H("/users/extensions/list","get"),users_extensions_get:H("/users/extensions","get"),users_extensions_put:H("/users/extensions","put"),videos_get:H("/videos","get"),videos_delete:H("/videos","delete"),whispers_post:H("/whispers","post")},G=e=>{let t={method:"websocket",session_id:e};return{stream:{online:e=>({type:"stream.online",version:"1",condition:{broadcaster_user_id:e},transport:t}),ofline:e=>({type:"stream.offline",version:"1",condition:{broadcaster_user_id:e},transport:t})},channel:{update:e=>({type:"channel.update",version:"2",condition:{broadcaster_user_id:e},transport:t}),chat:{message:(e,s)=>({type:"channel.chat.message",version:"1",condition:{broadcaster_user_id:e,user_id:s},transport:t}),notification:(e,s)=>({type:"channel.chat.notification",version:"1",condition:{broadcaster_user_id:e,user_id:s},transport:t})},channel_points_automatic_reward:{add:e=>({type:"channel.channel_points_automatic_reward_redemption.add",version:"1",condition:{broadcaster_user_id:e},transport:t})},channel_points_custom_reward:{add:e=>({type:"channel.channel_points_custom_reward.add",version:"1",condition:{broadcaster_user_id:e},transport:t})},points_custom_reward_redemption:{add:(e,s)=>({type:"channel.channel_points_custom_reward_redemption.add",version:"1",condition:{broadcaster_user_id:e,rewardId:s},transport:t})},channel_points_automatic_reward_redemption:{add:e=>({type:"channel.channel_points_automatic_reward_redemption.add",version:"1",condition:{broadcaster_user_id:e},transport:t})}}}},j=e=>null!=e,B=async()=>{let e=await b.getMe();if(null==e){let e=(await M.users_get({parameters:{}})).data[0],t={id:e.id,login:e.login};return await b.parameters.put({type:"me",value:t}),t}return e},K=async()=>{try{let e=await fetch("https://api.twitchinsights.net/v1/bots/all",{method:"GET"});return await e.json()}catch(e){return{bots:[],_total:0}}},U="SPAM_UPDATED_AT",q=async()=>{let e=await b.settings.get(U);if((null==e?void 0:e.value)!=null&&!k({target:e.value,num:7,ago:"day"}))return;let t=await K();b.settings.put({id:U,value:new Date().toISOString()}),b.spam.bulkPut(t.bots.map(e=>({login:e[0]})))},J=async()=>{let e=await B(),t=(await M.streams_get({parameters:{user_id:[e.id]}})).data[0];if(null==t){b.parameters.put({type:"live",value:{isLive:!1,startedAt:null,viewCount:0}});return}b.parameters.put({type:"live",value:{isLive:!0,startedAt:new Date(t.started_at),viewCount:t.viewer_count}})},z=async()=>{let e=await B();if(null==e)return;let[t,s]=await Promise.all([M.chat_chatters_get({parameters:{broadcaster_id:e.id,moderator_id:e.id}}),b.getChatters()]),a=await b.spam.bulkGet(t.data.map(e=>e.user_login)).then(e=>e.map(e=>null==e?void 0:e.login)),n=t.data.sort((e,t)=>Number(e.user_id)-Number(t.user_id)).filter(e=>!a.includes(e.user_login));(n.length!==s.users.length||0!==n.filter(e=>!s.users.includes(e.user_id)).length||0!==s.users.filter(e=>!n.map(e=>e.user_id).includes(e)).length)&&b.parameters.put(l.parse({type:"chatters",value:{users:n.map(e=>e.user_id),total:n.length}}))},F=async()=>{let e=await B(),t=(await b.followers.toArray()).filter(t=>t.channelId===e.id),s=M.fetchByAll(M.channels_followers_get),a=await s({parameters:{broadcaster_id:e.id,first:100}}).then(t=>t.data.map(t=>({channelId:e.id,userId:t.user_id,followedAt:new Date(t.followed_at),updateAt:new Date,createdAt:new Date}))),n=t.map(e=>e.userId),i=a.map(e=>e.userId),o=t.filter(e=>!i.includes(e.userId)).map(e=>e.id).filter(j),r=a.filter(e=>!n.includes(e.userId));0!==o.length&&b.followers.bulkDelete(o),0!==r.length&&b.followers.bulkPut(r)},V=e=>(e<=0&&console.warn("keepalive timeout secondsは0以上の値である必要があります。"),e>=600&&console.warn("keepalive timeout secondsは600以下の値である必要があります。"),"".concat("wss://eventsub.wss.twitch.tv/ws","?keepalive_timeout_seconds=").concat(e)),Y=e=>(t,s)=>{let a=e=>{let a=JSON.parse(e.data);t===a.metadata.message_type&&s(a,e)};return e.addEventListener("message",a),a},W=e=>t=>{e.removeEventListener("message",t)},X=e=>(t,s)=>{let a=e=>{let a=JSON.parse(e.data);"notification"===a.metadata.message_type&&a.metadata.subscription_type===t&&s(a,e)};return e.addEventListener("message",a),a};(a=null,{connect:async()=>{let e=new WebSocket(V(30)),t=X(e),s=Y(e),n=W(e);a=e;let i=await B();(async()=>{let e=G(await new Promise(e=>{let t=s("session_welcome",function(s){n(t),e(s.payload.session.id)})}));await Promise.all([M.createEventsub(e.channel.chat.message(i.id,i.id)),M.createEventsub(e.channel.update(i.id)),M.createEventsub(e.stream.online(i.id)),M.createEventsub(e.stream.ofline(i.id)),M.createEventsub(e.channel.channel_points_automatic_reward_redemption.add(i.id)),M.createEventsub(e.channel.channel_points_custom_reward.add(i.id)),M.createEventsub(e.channel.points_custom_reward_redemption.add(i.id))])})(),e.addEventListener("message",e=>{console.log(JSON.parse(e.data))}),t("channel.chat.message",e=>{let t={id:e.payload.event.message_id,userId:e.payload.event.chatter_user_id,channel:i.login,message:e.payload.event.message.text,messageType:"chat",fragments:e.payload.event.message.fragments,timestamp:Date.now(),rowdata:JSON.stringify(e),updateAt:new Date,createdAt:new Date};b.actions.add(t)}),t("channel.channel_points_automatic_reward_redemption.add",e=>{let t={id:e.payload.event.id,userId:e.payload.event.user_id,channel:i.login,userTitle:e.payload.event.reward.type,userInput:e.payload.event.user_input,rewardId:e.payload.event.reward.type,messageType:"atutomatic-reward",timestamp:Date.now(),rowdata:JSON.stringify(e),updateAt:new Date,createdAt:new Date};b.actions.add(t)}),t("channel.channel_points_custom_reward_redemption.add",e=>{let t={id:e.payload.event.id,userId:e.payload.event.user_id,channel:i.login,userTitle:e.payload.event.reward.title,userInput:e.payload.event.user_input,rewardId:e.payload.event.reward.id,messageType:"reward",timestamp:Date.now(),rowdata:JSON.stringify(e),updateAt:new Date,createdAt:new Date};b.actions.add(t)}),t("channel.update",e=>{let t={channelId:i.login,tpye:"update",broadcastTitle:e.payload.event.title,categoryId:e.payload.event.category_id,categoryName:e.payload.event.category_name,language:e.payload.event.language,timestamp:new Date,rowdata:JSON.stringify(e),updateAt:new Date,createdAt:new Date};b.channelHistories.put(r.parse(t))}),t("stream.offline",()=>J()),t("stream.online",()=>J())},close:()=>{null!=a&&(a.close(),a=null)}}).connect(),z(),q(),F(),J(),setInterval(()=>{z(),q(),F(),J()},1e4)}},r={};function l(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}},a=!0;try{o[e].call(s.exports,s,s.exports,l),a=!1}finally{a&&delete r[e]}return s.exports}l.m=o,l.x=function(){var e=l.O(void 0,[214,440],function(){return l(7729)});return l.O(e)},e=[],l.O=function(t,s,a,n){if(s){n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[s,a,n];return}for(var o=1/0,i=0;i<e.length;i++){for(var s=e[i][0],a=e[i][1],n=e[i][2],r=!0,d=0;d<s.length;d++)o>=n&&Object.keys(l.O).every(function(e){return l.O[e](s[d])})?s.splice(d--,1):(r=!1,n<o&&(o=n));if(r){e.splice(i--,1);var c=a();void 0!==c&&(t=c)}}return t},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce(function(t,s){return l.f[s](e,t),t},[]))},l.u=function(e){return 214===e?"static/chunks/214-839a4469207812ba.js":"static/chunks/"+e+".e1d3f2860f8c813b.js"},l.miniCssF=function(e){},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.tt=function(){return void 0===t&&(t={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("nextjs#bundler",t))),t},l.tu=function(e){return l.tt().createScriptURL(e)},l.p="/twitch-comment-viewer-v1-frontend/_next/",s={729:1},l.f.i=function(e,t){s[e]||importScripts(l.tu(l.p+l.u(e)))},n=(a=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(a),a.push=function(e){var t=e[0],a=e[1],i=e[2];for(var o in a)l.o(a,o)&&(l.m[o]=a[o]);for(i&&i(l);t.length;)s[t.pop()]=1;n(e)},i=l.x,l.x=function(){return Promise.all([l.e(214),l.e(440)]).then(i)},_N_E=l.x()}();