"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{12853:function(e,t,s){s.d(t,{RY:function(){return r},kQ:function(){return i},uB:function(){return l}});var a=s(57437);s(2265);var n=s(44839),o=s(23332);let i=(e,t,s)=>n=>{let o=e();if(null==o)return(0,a.jsx)("span",{...s,...n});let i=t.map(e=>o[e]).find(e=>null!=e);switch(typeof i){case"bigint":case"boolean":case"number":case"string":return(0,a.jsx)("span",{...s,...n,children:i.toString()});default:throw Error("")}},r=(e,t,s)=>n=>{let i=e();if(null==i)return(0,a.jsx)("time",{...s,...n});let r=t.map(e=>i[e]).find(e=>null!=e);switch(typeof r){case"number":case"string":case"object":if(!(r instanceof Date)&&!o.B.isDayjs(r))return;return(0,a.jsx)("time",{...s,...n,children:(0,o.B)(r).format(n.format||"YYYY/MM/DD hh:mm:ss")});default:throw Error("")}},l=(e,t,s,o)=>i=>{let r=e();if(null==r)return(0,a.jsx)("img",{...o,...i,className:(0,n.Z)(null==o?void 0:o.className,i.className),src:s.src,alt:s.alt});let l=t.src.map(e=>r[e]).find(e=>null!=e),c=t.alt.map(e=>r[e]).find(e=>null!=e);return"string"==typeof l&&"string"==typeof c?(0,a.jsx)("img",{...o,...i,className:(0,n.Z)(null==o?void 0:o.className,i.className),src:l,alt:c}):(0,a.jsx)("img",{...o,...i,className:(0,n.Z)(null==o?void 0:o.className,i.className),src:s.src,alt:s.alt})}},35941:function(e,t,s){s.d(t,{TWITCH_CONSTANTS:function(){return a}});let a={CLASSIFICATION_LABELS:[{name:"薬物・酩酊・過度の喫煙",id:"DrugsIntoxication",description:"タバコの過度な賛美・宣伝、マリファナの摂取・使用、合法薬物やアルコールによる酩酊、違法薬物の話題。"},{name:"性的なテーマ",id:"SexualThemes",description:"実際に金銭のやり取りが発生する、オンラインまたは対面式のギャンブル、ポーカー、ファンタジースポーツへの参加。"},{name:"著しい冒涜や下品な表現",id:"ProfanityVulgarity",description:"特に通常の会話内での、猥褻的・冒涜的・下品な表現の頻繁な使用。"},{name:"ギャンブル",id:"Gambling",description:"実際に金銭のやり取りが発生する、オンラインまたは対面式のギャンブル、ポーカー、ファンタジースポーツへの参加。"},{name:"暴力的で露骨な描写",id:"ViolentGraphic",description:"リアルな暴力、流血、重傷、死のシミュレーションや描写。"}],BROADCAST_LANGUAGE:[{id:"ja",name:"日本語"},{id:"en",name:"English"},{id:"id",name:"Bahasa Indonesia"},{id:"ca",name:"Catal\xe0"},{id:"da",name:"Dansk"},{id:"de",name:"Deutsch"},{id:"es",name:"Espa\xf1ol"},{id:"fr",name:"Fran\xe7ais"},{id:"it",name:"Italiano"},{id:"hu",name:"Magyar"},{id:"nl",name:"Nederlands"},{id:"no",name:"Norsk"},{id:"pl",name:"Polski"},{id:"pt",name:"Portugu\xeas"},{id:"ro",name:"Rom\xe2nă"},{id:"sk",name:"Slovenčina"},{id:"fi",name:"Suomi"},{id:"sv",name:"Svenska"},{id:"tl",name:"Tagalog"},{id:"vi",name:"Tiếng Việt"},{id:"tr",name:"T\xfcrk\xe7e"},{id:"cs",name:"Čeština"},{id:"el",name:"Ελληνικά"},{id:"bg",name:"Български"},{id:"ru",name:"Русский"},{id:"uk",name:"ภาษาไทย"},{id:"zh",name:"中文"},{id:"zh-hk",name:"粵語"},{id:"ko",name:"한국어"},{id:"asl",name:"American Sign Language"},{id:"other",name:"その他"}],API_KEY:"of40zatnkd1ftcaqnf92ahqznkg1vn"}},87722:function(e,t,s){s.d(t,{K:function(){return o}});var a=s(79801),n=s.n(a);class o{clear(e){return this.dataloader.clear(e)}clearAll(){return this.dataloader.clearAll()}async load(e){return this.dataloader.load(e)}async loadMany(e){return e.length>0?this.dataloader.loadMany(e):[]}prime(e,t){return this.dataloader.prime(e,t)}constructor(){this.dataloader=new(n())(this.batchLoad.bind(this))}}},82876:function(e,t,s){s.d(t,{$O:function(){return b},AC:function(){return p},HB:function(){return m},MH:function(){return _},iP:function(){return u},jp:function(){return r},yd:function(){return l}});var a=s(35941),n=s(67687),o=s(25214);let{API_KEY:i}=a.TWITCH_CONSTANTS,r=e=>"https://static-cdn.jtvnw.net/emoticons/v2/".concat(e,"/default/light/1.0"),l=e=>({STREAM_MANAGER:"https://dashboard.twitch.tv/u/".concat(e,"/stream-manager"),CHANNEL:"https://www.twitch.tv/".concat(e)}),c="twitch_token",d=async()=>{let e=await n.db.settings.get(c);if(null==e)throw Error("twitch token is not found");return e.value},u=async()=>!o.is.runner.server&&null!=await d().catch(()=>{}),_=e=>{if(o.is.runner.server)return null;let t=g();null!=t&&n.db.settings.put({id:c,value:t}).then(()=>{e.onSuccess()})},g=()=>{if(o.is.runner.server)return null;let e=window.location.hash.match(/access_token=(.*)&scope/);return null==e?null:e[1]},p=()=>null!=g(),m=async()=>{await n.db.settings.delete(c)},h=e=>{let t={Authorization:"Bearer ".concat(e),"Client-Id":i,"Content-Type":"application/json"};return function(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];let[n,o,...i]=s;return fetch(n,{...o,headers:{...t,...(null==o?void 0:o.headers)||{}}},...i)}},f=(e,t)=>async s=>{let{parameters:a,requestBody:n}=s,o=h(await d()),i=Object.entries(a||{}).map(e=>{let[t,s]=e;return Array.isArray(s)?s.map(e=>"".concat(t,"=").concat(decodeURIComponent(e))).join("&"):"string"==typeof s?"".concat(t,"=").concat(decodeURIComponent(s)):"".concat(t,"=").concat(s)}).join("&"),r=await o("https://api.twitch.tv/helix".concat(e,"?").concat(i),{method:t.toString().toUpperCase(),body:null==n?void 0:JSON.stringify(n)});return"patch"===t?{}:await r.json()},b={fetchByAll:e=>async t=>{let s=async t=>{var a;let n=await e(t);if((null===(a=n.pagination)||void 0===a?void 0:a.cursor)!=null){let e=await s({...t,parameters:{...t.parameters,after:n.pagination.cursor}});return{...e,data:[...n.data,...e.data]}}return n};return s(t)},createEventsub:async e=>await b.eventsub_subscriptions_post({requestBody:e}),channels_commercial_post:f("/channels/commercial","post"),channels_ads_get:f("/channels/ads","get"),channels_ads_schedule_snooze_post:f("/channels/ads/schedule/snooze","post"),analytics_extensions_get:f("/analytics/extensions","get"),analytics_games_get:f("/analytics/games","get"),bits_leaderboard_get:f("/bits/leaderboard","get"),bits_cheermotes_get:f("/bits/cheermotes","get"),extensions_transactions_get:f("/extensions/transactions","get"),channels_get:f("/channels","get"),channels_patch:f("/channels","patch"),channels_editors_get:f("/channels/editors","get"),channels_followed_get:f("/channels/followed","get"),channels_followers_get:f("/channels/followers","get"),channel_points_custom_rewards_post:f("/channel_points/custom_rewards","post"),channel_points_custom_rewards_delete:f("/channel_points/custom_rewards","delete"),channel_points_custom_rewards_get:f("/channel_points/custom_rewards","get"),channel_points_custom_rewards_redemptions_get:f("/channel_points/custom_rewards/redemptions","get"),channel_points_custom_rewards_patch:f("/channel_points/custom_rewards","patch"),channel_points_custom_rewards_redemptions_patch:f("/channel_points/custom_rewards/redemptions","patch"),charity_campaigns_get:f("/charity/campaigns","get"),charity_donations_get:f("/charity/donations","get"),chat_chatters_get:f("/chat/chatters","get"),chat_emotes_get:f("/chat/emotes","get"),chat_emotes_global_get:f("/chat/emotes/global","get"),chat_emotes_set_get:f("/chat/emotes/set","get"),chat_badges_get:f("/chat/badges","get"),chat_badges_global_get:f("/chat/badges/global","get"),chat_settings_get:f("/chat/settings","get"),chat_emotes_user_get:f("/chat/emotes/user","get"),chat_settings_patch:f("/chat/settings","patch"),chat_announcements_post:f("/chat/announcements","post"),chat_shoutouts_post:f("/chat/shoutouts","post"),chat_messages_post:f("/chat/messages","post"),chat_color_get:f("/chat/color","get"),chat_color_put:f("/chat/color","put"),clips_post:f("/clips","post"),clips_get:f("/clips","get"),eventsub_conduits_get:f("/eventsub/conduits","get"),eventsub_conduits_post:f("/eventsub/conduits","post"),eventsub_conduits_patch:f("/eventsub/conduits","patch"),eventsub_conduits_delete:f("/eventsub/conduits","delete"),eventsub_conduits_shards_get:f("/eventsub/conduits/shards","get"),eventsub_conduits_shards_patch:f("/eventsub/conduits/shards","patch"),content_classification_labels_get:f("/content_classification_labels","get"),entitlements_drops_get:f("/entitlements/drops","get"),entitlements_drops_patch:f("/entitlements/drops","patch"),extensions_configurations_get:f("/extensions/configurations","get"),extensions_configurations_put:f("/extensions/configurations","put"),extensions_required_configuration_put:f("/extensions/required_configuration","put"),extensions_pubsub_post:f("/extensions/pubsub","post"),extensions_live_get:f("/extensions/live","get"),extensions_jwt_secrets_get:f("/extensions/jwt/secrets","get"),extensions_jwt_secrets_post:f("/extensions/jwt/secrets","post"),extensions_chat_post:f("/extensions/chat","post"),extensions_get:f("/extensions","get"),extensions_released_get:f("/extensions/released","get"),bits_extensions_get:f("/bits/extensions","get"),bits_extensions_put:f("/bits/extensions","put"),eventsub_subscriptions_post:f("/eventsub/subscriptions","post"),eventsub_subscriptions_delete:f("/eventsub/subscriptions","delete"),eventsub_subscriptions_get:f("/eventsub/subscriptions","get"),games_top_get:f("/games/top","get"),games_get:f("/games","get"),goals_get:f("/goals","get"),guest_star_channel_settings_get:f("/guest_star/channel_settings","get"),guest_star_channel_settings_put:f("/guest_star/channel_settings","put"),guest_star_session_get:f("/guest_star/session","get"),guest_star_session_post:f("/guest_star/session","post"),guest_star_session_delete:f("/guest_star/session","delete"),guest_star_invites_get:f("/guest_star/invites","get"),guest_star_invites_post:f("/guest_star/invites","post"),guest_star_invites_delete:f("/guest_star/invites","delete"),guest_star_slot_post:f("/guest_star/slot","post"),guest_star_slot_patch:f("/guest_star/slot","patch"),guest_star_slot_delete:f("/guest_star/slot","delete"),guest_star_slot_settings_patch:f("/guest_star/slot_settings","patch"),hypetrain_events_get:f("/hypetrain/events","get"),moderation_enforcements_status_post:f("/moderation/enforcements/status","post"),moderation_automod_message_post:f("/moderation/automod/message","post"),moderation_automod_settings_get:f("/moderation/automod/settings","get"),moderation_automod_settings_put:f("/moderation/automod/settings","put"),moderation_banned_get:f("/moderation/banned","get"),moderation_bans_post:f("/moderation/bans","post"),moderation_bans_delete:f("/moderation/bans","delete"),moderation_unban_requests_get:f("/moderation/unban_requests","get"),moderation_unban_requests_patch:f("/moderation/unban_requests","patch"),moderation_blocked_terms_get:f("/moderation/blocked_terms","get"),moderation_blocked_terms_post:f("/moderation/blocked_terms","post"),moderation_blocked_terms_delete:f("/moderation/blocked_terms","delete"),moderation_chat_delete:f("/moderation/chat","delete"),moderation_channels_get:f("/moderation/channels","get"),moderation_moderators_get:f("/moderation/moderators","get"),moderation_moderators_post:f("/moderation/moderators","post"),moderation_moderators_delete:f("/moderation/moderators","delete"),channels_vips_get:f("/channels/vips","get"),channels_vips_post:f("/channels/vips","post"),channels_vips_delete:f("/channels/vips","delete"),moderation_shield_mode_put:f("/moderation/shield_mode","put"),moderation_shield_mode_get:f("/moderation/shield_mode","get"),polls_get:f("/polls","get"),polls_post:f("/polls","post"),polls_patch:f("/polls","patch"),predictions_get:f("/predictions","get"),predictions_post:f("/predictions","post"),predictions_patch:f("/predictions","patch"),raids_post:f("/raids","post"),raids_delete:f("/raids","delete"),schedule_get:f("/schedule","get"),schedule_icalendar_get:f("/schedule/icalendar","get"),schedule_settings_patch:f("/schedule/settings","patch"),schedule_segment_post:f("/schedule/segment","post"),schedule_segment_patch:f("/schedule/segment","patch"),schedule_segment_delete:f("/schedule/segment","delete"),search_categories_get:f("/search/categories","get"),search_channels_get:f("/search/channels","get"),streams_get:f("/streams","get"),streams_followed_get:f("/streams/followed","get"),streams_markers_post:f("/streams/markers","post"),streams_markers_get:f("/streams/markers","get"),subscriptions_get:f("/subscriptions","get"),subscriptions_user_get:f("/subscriptions/user","get"),tags_streams_get:f("/tags/streams","get"),streams_tags_get:f("/streams/tags","get"),teams_channel_get:f("/teams/channel","get"),teams_get:f("/teams","get"),users_get:f("/users","get"),users_put:f("/users","put"),users_blocks_get:f("/users/blocks","get"),users_blocks_put:f("/users/blocks","put"),users_blocks_delete:f("/users/blocks","delete"),users_extensions_list_get:f("/users/extensions/list","get"),users_extensions_get:f("/users/extensions","get"),users_extensions_put:f("/users/extensions","put"),videos_get:f("/videos","get"),videos_delete:f("/videos","delete"),whispers_post:f("/whispers","post")}},91825:function(e,t,s){s.d(t,{h:function(){return a}});let a={notNull:e=>null!=e,notDeleted:e=>null==e.deletedAt}},62022:function(e,t,s){s.d(t,{Gl:function(){return r},Gq:function(){return i},Nr:function(){return l},f0:function(){return c}});var a=s(2265),n=s(16463),o=s(56976);let i=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];let[n,o]=t,[i,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=n();r(null),e.then(e=>{r(e)})},o),i},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",[t,s]=(0,a.useState)(e);return[t,(0,a.useCallback)(e=>{e.currentTarget instanceof HTMLInputElement&&s(e.currentTarget.value)},[])]},l=(e,t,s)=>(0,a.useMemo)(()=>(0,o.D)(e,t),s),c=()=>{let e=(0,n.useRouter)(),t=(0,n.usePathname)();return(0,a.useCallback)(()=>{"/login"!==t&&e.push("/login")},[e,t])}},67687:function(e,t,s){s.d(t,{X1:function(){return g},db:function(){return p}});var a=s(2265),n=s(78339),o=s(67688),i=s(92911),r=s(17645),l=s(11653),c=s(33427),d=s(91279);class u extends c.ZP{async getMe(){let e=await this.parameters.get("me");if((null==e?void 0:e.type)!=null&&"me"===e.type&&null!=e.value)return e.value}async getLive(){let e=await this.parameters.get("live");return(null==e?void 0:e.type)==null||"live"!==e.type||null==e.value?{isLive:!1,viewCount:0,startedAt:null}:e.value}async getChatters(){let e=await this.parameters.get("chatters");return(null==e?void 0:e.type)==null||"chatters"!==e.type||null==e.value?{users:[],total:0}:e.value}constructor(){super("twitch-comments"),this.version(30).stores({users:l.zE,games:r.t,actions:n.bY,followers:i.I,channelHistories:"++id,channelId,type,categoryId,timestamp,[channelId+timestamp]",listenerHistories:"++id,channelId,userId,[channelId+timestamp]",broadcastTemplates:o.bJ,parameters:"type",spam:"login",settings:"id"})}}let _=async e=>{let t=await e.count();return async s=>({target:await e.offset(s.pageNo*s.pageSize).limit(s.pageSize).toArray(),count:t,page:s.pageNo+1,maxPage:Math.ceil(t/s.pageSize),hasPrev:s.pageNo>=1,hasNext:s.pageNo*s.pageSize<t-s.pageSize})},g=(e,t,s)=>{let[n,o]=(0,a.useState)(t.pageNo);return(0,a.useEffect)(()=>{o(0)},s),{value:(0,d.yR)(async()=>(await _(e.reverse()))({pageNo:n,pageSize:t.pageSize}),[n,t.pageSize,...s]),next:(0,a.useCallback)(()=>{o(e=>Math.max(e+1,0))},[]),prev:(0,a.useCallback)(()=>{o(e=>Math.max(e-1,0))},[])}},p=new u},59151:function(e,t,s){s.d(t,{Id:function(){return u},Rf:function(){return g},m7:function(){return p},oV:function(){return d},uM:function(){return _}});var a=s(11653),n=s(67687),o=s(23332),i=s(82876),r=s(91825);let l=e=>async t=>{let s=(await e.table.bulkGet(t)).filter(r.h.notNull).filter(t=>{var s;return(null===(s=e.options)||void 0===s?void 0:s.updateTiming)==null||(0,o.B)(t.updateAt).isSameOrBefore((0,o.B)(new Date).add(e.options.updateTiming.value,e.options.updateTiming.unit))}),a=t.filter(t=>-1===s.findIndex(s=>s[e.idKey]===t)),n=await e.fetcher(a);return await e.table.bulkPut(n),(await e.table.bulkGet(t)).filter(r.h.notNull)},c=e=>async t=>0===t.length?[]:(await Promise.all(Array(Math.ceil(t.length/100)).fill(1).map(async(s,a)=>await e(t.slice(100*a,100*a+100))))).flat(),d=e=>{if(void 0===e)return n.db.broadcastTemplates.toArray();switch(e.type){case"id":return n.db.broadcastTemplates.bulkGet(e.value);case"gameId":return n.db.broadcastTemplates.where("gameId").equals(e.value).toArray();case"tags":return n.db.broadcastTemplates.where("tags").equals(e.value).toArray();case"favorite":return n.db.broadcastTemplates.toArray().then(t=>t.filter(t=>!!t.favorite==e.value))}},u=(e,t)=>n.db.broadcastTemplates.update(e,{...t,updateAt:new Date}),_=e=>n.db.broadcastTemplates.bulkDelete(e),g=l({table:n.db.users,idKey:"id",options:{updateTiming:{value:1,unit:"day"}},fetcher:c(async e=>{let t=await i.$O.users_get({parameters:{id:e.map(e=>e.toString())}}),s=await n.db.spam.bulkGet(t.data.map(e=>e.login)),o=await n.db.users.bulkGet(t.data.map(e=>e.id));return t.data.map(e=>{let t=o.find(t=>(null==t?void 0:t.id)===e.id);return a.EL.parse({id:e.id,login:e.login,displayName:e.display_name,type:e.type,broadcasterType:e.broadcaster_type,description:e.description,profileImageUrl:e.profile_image_url,offlineImageUrl:e.offline_image_url,createdAt:(null==t?void 0:t.createdAt)||new Date,updateAt:new Date,isSpam:(null==t?void 0:t.isSpam)||-1!==s.findIndex(t=>(null==t?void 0:t.login)===e.login),rowData:JSON.stringify(e)})})})}),p=l({table:n.db.games,idKey:"id",fetcher:c(async e=>(await i.$O.games_get({parameters:{id:e.map(e=>e.toString())}})).data.map(e=>({id:e.id,box_art_url:e.box_art_url,name:e.name,igdb_id:e.igdb_id,createdAt:new Date,updateAt:new Date})))})},78339:function(e,t,s){s.d(t,{bY:function(){return r}});var a=s(59772),n=s(87787),o=s(6307),i=s(11653);let r="++autoincrementId,id,*channel,messageType,*userId,*timestamp,[channel+timestamp]",l=a.Ry({autoincrementId:a.Rx().optional(),id:a.Z_(),channel:a.Z_(),userId:i.XM.nullable().default(null),timestamp:a.Rx().optional(),bits:a.Z_().optional(),rowdata:a.Z_().optional()}).and(n.$),c=a.Ry({messageType:a.Km(["chat"]),message:a.Z_(),fragments:o.z.array()}).and(l),d=a.Ry({messageType:a.Km(["reward","atutomatic-reward"]),rewardId:a.Z_(),userTitle:a.Z_(),userInput:a.Z_()}).and(l);c.or(d)},87787:function(e,t,s){s.d(t,{$:function(){return n}});var a=s(59772);let n=a.Ry({createdAt:a.hT().optional().default(new Date),updateAt:a.hT().optional().default(new Date),deletedAt:a.hT().optional()})},67688:function(e,t,s){s.d(t,{Bb:function(){return r},XV:function(){return i},bJ:function(){return o}});var a=s(59772),n=s(87787);let o="++id,channelId,gameId,*tags,favorite",i=a.Ry({id:a.Rx().optional(),channelId:a.Z_().optional(),gameId:a.Z_().optional(),broadcastTitle:a.Z_().max(140,"最大140文字まで入力可能です。").default(""),language:a.Z_(),tags:a.IX(a.Z_()).max(25,"最大のタグ数は25件までです。").default([]),classificationLabels:a.Z_().array().default([]),isBrandedContent:a.O7().default(!1),favorite:a.O7().optional().default(!1)}).and(n.$),r=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.map(e=>i.parse({channelId:e.broadcaster_id,gameId:e.game_id,broadcastTitle:e.title,language:e.broadcaster_language,tags:e.tags,classificationLabels:e.content_classification_labels,isBrandedContent:e.is_branded_content,favorite:!1}))}},92911:function(e,t,s){s.d(t,{I:function(){return i}});var a=s(59772),n=s(87787),o=s(11653);let i="++id,channelId,userId,[channelId+userId],createdAt,[channelId+createdAt]";a.Ry({id:a.Rx().optional(),channelId:o.XM,userId:o.XM,followedAt:a.hT()}).and(n.$)},6307:function(e,t,s){s.d(t,{z:function(){return u}});var a=s(59772),n=s(11653);let o=a.Ry({user_id:n.XM,user_login:a.Z_(),user_name:a.Z_()}),i=a.Ry({prefix:a.Z_(),bits:a.Rx(),tier:a.Rx()}),r=a.Ry({id:a.Z_(),emote_set_id:a.Z_(),owner_id:a.Z_(),format:a.Z_().array()}),l=a.Ry({type:a.Km(["text"]),text:a.Z_(),cheermote:i.optional(),emote:a.lB(),mention:a.lB()}),c=a.Ry({type:a.Km(["mention"]),text:a.Z_(),cheermote:i.optional(),emote:a.lB(),mention:o}),d=a.Ry({type:a.Km(["emote"]),text:a.Z_(),cheermote:i.optional(),emote:r,mention:a.lB()}),u=l.or(c).or(d)},17645:function(e,t,s){s.d(t,{t:function(){return o}});var a=s(59772),n=s(87787);let o="id,igdb_id,name";a.Ry({id:a.Z_(),name:a.Z_(),box_art_url:a.Z_().url(),igdb_id:a.Z_()}).and(n.$)},11653:function(e,t,s){s.d(t,{EL:function(){return r},XM:function(){return i},zE:function(){return o}});var a=s(59772),n=s(87787);let o="id,*userId,displayName,type,broadcasterType",i=a.Z_(),r=a.Ry({id:i,displayName:a.Z_().optional(),login:a.Z_(),type:a.Z_().optional(),broadcasterType:a.Z_().optional(),description:a.Z_().optional(),profileImageUrl:a.Z_().optional(),offlineImageUrl:a.Z_().optional(),metaComment:a.Z_().optional(),isSpam:a.O7().optional().default(!1),rowData:a.Z_().optional()}).and(n.$)}}]);