  const PASSIVES = [

//              ITEMS DE DEPART
//
//              Manche 0 -> 9



    { id: 'Illumination', name: 'Illumination', desc: '+100 Transcendance',maxRound: 7, apply: (ctx) => { ctx.player.trans += 100; } },
    { id: 'mage', name: 'Baton ancestral', desc: '+50 Énergie',maxRound: 7, apply: (ctx) => { ctx.player.energie  += 50; } },
    { id: 'bully', name: 'Dague affinée', desc: '+50 Force',maxRound: 7, apply: (ctx) => { ctx.player.force += 50; } },
    { id: 'pavins', name: 'Armure des Pavins', desc: '+40 Résistance Reel<br>+40 résistance Spéciale<br>+150 PV',maxRound: 7, apply: (ctx) => { ctx.player.resSpec += 40; ctx.player.resReal += 40; ctx.player.maxHP += 150; ctx.player.hp += 150;} },
    { id: 'book', name: 'Livre magique', desc: '+20 Suppression Spéciale<br>+20 Suppression Réel,',maxRound: 7, apply: (ctx) => { ctx.player.supSpec += 20; ctx.player.supReal += 20;} },
    { id: 'hero', name: 'Fusil du héro', desc: '+10% de chance de critique<br>+25 Force',maxRound: 7, apply: (ctx) => { ctx.player.crit += 10; ctx.player.force += 25;} },
    { id: 'ring', name: 'Bague sainte', desc: '+20 Energie<br>+100 PV',maxRound: 7, apply: (ctx) => { ctx.player.energie += 20; ctx.player.maxHP += 100; ctx.player.hp += 100;} },
    { id: 'fruit', name: 'Fruit vert', desc:'Vous gagnez +20PVMax à chaque élimination (max 10 stacks)', maxRound: 7, onKill: (ctx) => { ctx.player.stacks.fruit = (ctx.player.stacks.fruit || 0); if (ctx.player.stacks.fruit < 10) { ctx.player.maxHP += 20; ctx.player.hp += 20; ctx.player.stacks.fruit++; } } },


//              ITEMS COMMUNS
//
//              Manche 10 -> 49


    { id: 'azerty', name: 'Sceptre d`azerty', desc: "+50 Energie<br>Chaque attaque infligée vous occtoie: +4 Énergie",unlockRound: 10, maxRound: 49, apply: (ctx) => {ctx.player.energie += 50;}, onAttack: (ctx) => { ctx.player.energie += 4; ctx.player.stacks.azerty = (ctx.player.stacks.azerty || 0) + 1;} },
    { id: 'granitShield', name: 'Bouclier de granit', desc: 'À chaque attaque subie : +10% des dégâts subis en PV Max.',unlockRound: 10, maxRound: 49, onHit: (ctx, dmg) => { ctx.player.maxHP = Math.ceil(ctx.player.maxHP + dmg * 0.10); ctx.player.stacks.granitShield = (ctx.player.stacks.granitShield || 0) + 1;} },
    { id: 'furry', name: 'Epée maudite de Rexil', desc: 'Vous sacrifiez 25% de vos PV max mais doublez vos dégâts réels.',unlockRound: 10, maxRound: 49, apply: (ctx) => { ctx.player.maxHP = Math.floor(ctx.player.maxHP * 0.75); if (ctx.player.hp > ctx.player.maxHP) { ctx.player.hp = ctx.player.maxHP; } ctx.player.force *= 2; }},    
    { id: 'ledruarmor', name: 'Armure Ledruienne', desc: 'À chaque attaque subie : +10 transandance',unlockRound: 10, maxRound: 49, onHit: (ctx, dmg) => { ctx.player.trans += 10; ctx.player.stacks.ledruarmor = (ctx.player.stacks.ledruarmor || 0) + 1;} },
    { id: 'magicspirit', name: 'Esprit magique', desc: "Vous gagnez 60% de votre énergie en PV Max.",unlockRound: 10, maxRound: 49, apply: (ctx) => { const bonus = Math.floor(ctx.player.energie * 0.6); ctx.player.maxHP += bonus; ctx.player.hp += bonus; } },
    { id: 'gambit', name: 'Fruit de Phenox', desc: 'vous divisez par 2 toutes vos stats offensives mais multipliez vos PV Max par 3',unlockRound: 10, maxRound: 49, apply: (ctx) => {ctx.player.maxHP *= 3 ; ctx.player.energie /=2; ctx.player.force /=2; ctx.player.trans /=2; ctx.player.hp = ctx.player.maxHP; }},
    { id: 'adrenaline', name: 'Adrénaline', desc: 'vous perdez tout vos PV mais vous gagnez +9000 vit et +1000 en attaque',unlockRound: 10, maxRound: 49, apply: (ctx) => { ctx.player.maxHP = Math.floor(ctx.player.maxHP = 1); if (ctx.player.hp > ctx.player.maxHP) { ctx.player.hp = ctx.player.maxHP; } ctx.player.force += 1000; ctx.player.speed +=9000; }},
    { id: 'kleenex', name: 'Kleenex choix', desc: 'Chaque coup infligé vous gagnez 15 de vitesse', unlockRound: 10, maxRound: 49, onAttack: (ctx) => {ctx.player.speed += 15; ctx.player.stacks.kleenex = (ctx.player.stacks.kleenex || 0) + 1;},},
    { id: 'stoneheart', name: 'Cœur de Pierre', desc: "Vous gagnez +1% PV Max à chaque coup reçu (max 30%)", unlockRound: 10, maxRound: 49, onHit: (ctx, dmg) => { ctx.player.stacks.stoneheart = (ctx.player.stacks.stoneheart || 0); if (ctx.player.stacks.stoneheart < 30) { ctx.player.maxHP = Math.floor(ctx.player.maxHP * 1.01); ctx.player.stacks.stoneheart++; } } },
//DESACTIVE POUR NON FONCTIONNEMENT    { id: 'endurancebreaker', name: 'Briseur d’Endurance', desc: "À chaque attaque infligée au même adversaire, vos dégâts augmentent de 2% (reset après sa mort).", unlockRound: 15, maxRound: 51, onAttack: (ctx) => { if (!ctx.player.stacks) ctx.player.stacks = 0; ctx.player.stacks += 0.02;}, onDamage: (ctx, dmg) => { return Math.floor(dmg * (1 + (ctx.player.stacks || 0))); }, onKill: (ctx) => { ctx.player.stacks = 0;} },
//DESACTIVE POUR NON FONCTIONNEMENT    { id: 'pikpik', name: 'Bouclier de Jorifice', desc: '+200 PV<br>vous renvoyez a votre adversaire 10% des PV qu il vous inflige', unlockRound: 10, maxRound: 49, onHit: (ctx, dmg) => { const reflect = Math.floor(dmg * 0.10); ctx.monster.hp = clamp(ctx.monster.hp - reflect, 0, ctx.monster.maxHP); },  apply: (ctx) =>{ctx.player.maxHP += 200; ctx.player.hp += 200;} },
//DESACTIVE POUR NON FONCTIONNEMENT    { id: 'harpe', name: 'harpe élémentaire', desc: 'Chaque tour vous soignez vos PV équivalents à 50% de votre Energie',unlockRound: 10, maxRound: 49, onTurn: (ctx) => { const heal = Math.floor(ctx.player.energie * 0.50); ctx.player.hp = clamp(ctx.player.hp + heal, 0, ctx.player.maxHP); } },
//DESACTIVE POUR NON FONCTIONNEMENT    { id: 'restes', name: 'Pomme ensorcelée', desc: '+20 SupprSpé<br>À chaque ennemi tué : +20% PV max (soin).',unlockRound: 10, maxRound: 49, onTurn: (ctx) => { const heal = Math.floor(ctx.player.maxHP * 0.20); ctx.player.hp = clamp(ctx.player.hp + heal, 0, ctx.player.maxHP); } }, 





//              ITEMS ATYPIQUES
//
//              Manche 50 -> 99


    { id: 'aze72', name: 'Fusil Imperial AZE72', desc: "Chaque attaque infligée vous auguemente votre energie de 20",unlockRound: 50, maxRound: 99, onAttack: (ctx) => { ctx.player.energie += 20; ctx.player.stacks.aze72 = (ctx.player.stacks.aze72 || 0) + 1;} },
    { id: 'hyperviolent', name: 'Lame hyperviolente', desc: "+50% Crit<br>+100 Suppr.Reel<br>x2 Force",unlockRound: 50, maxRound: 99, apply: (ctx) => { ctx.player.force *= 2; ctx.player.crit += 50; ctx.player.supReal += 100;} },
    { id: 'spec', name: 'Racine Sucrée', desc: "Vous gagnez un bonus de PV Max équivalent à 50% votre pourcentage de critiques.", unlockRound: 50, maxRound: 99, apply: (ctx) => { const bonus = Math.round(ctx.player.maxHP * ((ctx.player.crit / 100) / 2)); ctx.player.maxHP += bonus; ctx.player.hp += bonus; } },
    { id: 'miracle', name: 'Voile Miracle', desc: "+200 Res. Spe<br>+200 Res.Reel<br>+200 Res. Globale",unlockRound: 50, maxRound: 99, apply: (ctx) => { ctx.player.resSpec += 200;ctx.player.resReal += 200;ctx.player.resGlob += 200;} },
    { id: 'spikefruit', name:'Fruit épineux', desc:'Vous gagnez de la force équivalent à 10% de vos PVMax',  unlockRound: 50, maxRound: 99, apply: (ctx) => { ctx.player.force += (0.1 * ctx.player.maxHP)},},
    { id: 'lancetrans', name: 'Lance Transperçante', desc: 'Vous gagnez 20% de votre Force en Suppr Réelle', unlockRound: 50, maxRound: 99, apply: (ctx,dmg) => { ctx.player.supReal += (ctx.player.force / 5)}},
    { id: 'overdrive', name: 'Surcharge Instable', desc: "Double vos dégâts infligés mais vous perdez 1% de vos PV Max à chaque attaque", unlockRound: 50, maxRound: 99, onAttack: (ctx) => { ctx.player.maxHP = Math.max(1, Math.floor(ctx.player.maxHP * 0.99)); if (ctx.player.hp > ctx.player.maxHP) ctx.player.hp = ctx.player.maxHP; }, onDamage: (ctx, dmg) => { return dmg * 2; } },
    { id: 'soulharvest', name: 'Moissonneuse d’âmes', desc: "À chaque ennemi tué : +5 Force et +5 Énergie", unlockRound: 50, maxRound: 99, onKill: (ctx) => { ctx.player.force += 5; ctx.player.energie += 5; ctx.player.stacks.soulharvest = (ctx.player.stacks.soulharvest || 0) + 1; } },
    { id: 'phoenixfeather', name: 'Plume du Phénix', desc: "La première fois que vous mourrez, vous ressuscitez avec 50% de vos PV Max (1 fois par run)", unlockRound: 50, maxRound: 99, onDeath: (ctx) => { if (!ctx.player.stacks.phoenixfeather) { ctx.player.stacks.phoenixfeather = 1; ctx.player.hp = Math.floor(ctx.player.maxHP * 0.5); return false; } return true; } },
    { id: 'colossusarmor', name: 'Armure du Colosse', desc: "Vous réduisez tous les dégâts subis de 15%, mais votre vitesse est réduite de 30%", unlockRound: 50, maxRound: 98, apply: (ctx) => { ctx.player.speed = Math.floor(ctx.player.speed * 0.7); }, onDamageTaken: (ctx, dmg) => { return Math.floor(dmg * 0.85); } },


//              OBJETS MAUDITS
//
//              Manche 100 -> 101



{ id: 'cleanser', name: 'Dague Purificatrice', desc: "Vous perdez tout vos items mais ouvrez un chemin vers le sud", unlockRound: 98, maxRound: 102, apply: (ctx) => { ctx.player.passives = []; ctx.player.stacks = {}; ctx.player.zone = 'sud'; } },
{ id: 'cleanser', name: 'Sceptre Purificatrice', desc: "Vous perdez tout vos items mais ouvrez un chemin vers le nord", unlockRound: 98, maxRound: 102, apply: (ctx) => { ctx.player.passives = []; ctx.player.stacks = {}; ctx.player.zone = 'nord';} },
{ id: 'cleanser', name: 'Fruit Purificateur', desc: "Vous perdez tout vos items mais ouvrez un chemin vers l'ouest", unlockRound: 98, maxRound: 102, apply: (ctx) => { ctx.player.passives = []; ctx.player.stacks = {}; ctx.player.zone = 'ouest';} },
{ id: 'cleanser', name: 'Voile Purificatrice', desc: "Vous perdez tout vos items mais ouvrez un chemin vers l'est'", unlockRound: 98, maxRound: 102, apply: (ctx) => { ctx.player.passives = []; ctx.player.stacks = {}; ctx.player.zone = 'est';} },
 


//              OBJETS RARES
//
//              Manche 101 -> 200






// ZONE NORD             3/5
{ 
  id: 'cho1772', 
  name: 'Converteur technologique surpuissant CHO1772 ', 
  desc: 'Vous convertissez votre force en energie', 
  unlockRound: 103, maxRound: 200, 
  zones: ['nord'], 
  apply: (ctx) => { ctx.player.energie += ctx.player.force; ctx.player.force = 0;} 
},
{ 
  id: 'concentrator', 
  name: 'Concentrateur hyperenergetique SWAIN9999', 
  desc: 'Vous concentrez 50% de votre energie pour doubler vos PV', 
  unlockRound: 103, maxRound: 200, 
  zones: ['nord'], 
  apply: (ctx) => { ctx.player.energie *= 0.5; ctx.player.maxHP *= 2;  ctx.player.hp *= 2;} 
},
 { 
    id: 'kanon', 
    name: 'Canon anhiliateur de forme vivante SYL4321', 
    desc: "Chaque attaque infligée vous auguemente votre energie de 1%",
    unlockRound: 103, maxRound: 200, 
    zones: ['nord'], 
    onAttack: (ctx) => { ctx.player.energie += ctx.player.energie * 0.01; ctx.player.stacks.kanon = (ctx.player.stacks.kanon || 0) + 1;} 
},
{
  id: 'manaburn',
  name: 'Catalyseur de mana instable',
  desc: 'Vos attaques infligent 10% de votre énergie en dégâts purs supplémentaires.',
  unlockRound: 103, maxRound: 200,
  zones: ['nord'],
  onAttack: (ctx, dmg) => {
    const extra = Math.floor(ctx.player.energie * 0.1);
    ctx.monster.hp -= extra;
    return dmg;
  }
},
{
  id: 'arcaneoverflow',
  name: 'Débordement arcanique',
  desc: 'Quand vous arrivez à 0 PV, consomme toute votre énergie pour revenir à la vie avec autant de PV.',
  unlockRound: 103, maxRound: 200,
  zones: ['nord'],
  onHit: (ctx) => {
    if (ctx.player.hp <= 0 && ctx.player.energie > 0 && !ctx.player.stacks.arcaneoverflow) {
      ctx.player.hp = Math.min(ctx.player.energie, ctx.player.maxHP);
      ctx.player.energie = 0;
      ctx.player.stacks.arcaneoverflow = true; // une seule fois
    }
  }
},







//ZONE SUD              2/5
{
    id: 'berserkerMask',
    name: 'Lame du sang millinéaire',
    desc: 'Plus vos PV sont bas, plus vos dégâts augmentent (jusqu\'à +300%)',
    unlockRound: 35,
    zones: ['sud'], 
    onDamage: (ctx, dmg) => {
      const hpPercent = ctx.player.hp / ctx.player.maxHP;
      const multiplier = 1 + (3 * (1 - hpPercent)); // 1x à 100% PV, 4x à 0% PV
      return Math.floor(dmg * multiplier);
    }
  },
  {
    id: 'berserkerMask',
    name: 'Lance éxécutrice ',
    desc: 'Plus vos PV sont bas, plus vos dégâts augmentent (jusqu\'à +300%)',
    unlockRound: 35,
    zones: ['sud'], 
    onDamage: (ctx, dmg) => {
      const hpPercent = ctx.player.hp / ctx.player.maxHP;
      const multiplier = 1 + (3 * (1 - hpPercent)); // 1x à 100% PV, 4x à 0% PV
      return Math.floor(dmg * multiplier);
    }
  },
  {
  id: 'bloodarmor',
  name: 'Armure écarlate',
  desc: 'Chaque fois que vous perdez 10% de vos PV max, gagnez +5 force (cumulatif).',
  unlockRound: 103, maxRound: 200,
  zones: ['sud'],
  onHit: (ctx, dmg) => {
    const lost = ctx.player.maxHP - ctx.player.hp;
    ctx.player.force = ctx.player.force + Math.floor((lost / ctx.player.maxHP) * 50);
  }
},
{
  id: 'bloodpact',
  name: 'Pacte du sang',
  desc: 'Vos attaques vous infligent 5% de vos PV actuels, mais infligent +50% dégâts.',
  unlockRound: 103, maxRound: 200,
  zones: ['sud'],
  onAttack: (ctx, dmg) => { ctx.player.hp = Math.max(1, ctx.player.hp - Math.floor(ctx.player.hp * 0.05)); return Math.floor(dmg * 1.5); }
},
{
  id: 'laststand',
  name: 'Dernier rempart',
  desc: 'Quand vous tombez à 0 PV, vous revenez à 30% PV une seule fois.',
  unlockRound: 103, maxRound: 200,
  zones: ['sud'],
  onHit: (ctx, dmg) => {
    if (ctx.player.hp <= 0 && !ctx.player.stacks.laststand) {
      ctx.player.hp = Math.floor(ctx.player.maxHP * 0.3);
      ctx.player.stacks.laststand = true;
    }
  }
},







//ZONE EST        2/5
{ 
  id: 'spiritshield', 
  name: 'Bouclier de l\'Est', 
  desc: '+100 Énergie +300 Résistance Spéciale (exclusif zone Est)', 
  unlockRound: 103, maxRound: 200, 
  zones: ['est'], 
  apply: (ctx) => { ctx.player.energie += 100; ctx.player.resSpec += 300; } 
},
{ 
  id: 'divinspeed', 
  name: 'Accélération divine', 
  desc: 'Chaque degat subit vous octroie +1% de vitesse', 
  unlockRound: 103, maxRound: 200, 
  zones: ['est'], 
  onHit: (ctx) => { ctx.player.speed += ctx.player.speed * 0.01; ctx.player.stacks.divinspeed = (ctx.player.stacks.divinspeed || 0) + 1;} 
},
{
  id: 'heavensblessing',
  name: 'Bénédiction céleste',
  desc: 'À chaque manche, vous récupérez 20% de vos PV manquants.',
  unlockRound: 103, maxRound: 200,
  zones: ['est'],
  onKill: (ctx) => { 
    const missing = ctx.player.maxHP - ctx.player.hp;
    ctx.player.hp += Math.floor(missing * 0.2);
  }
},
{
  id: 'lightmirror',
  name: 'Miroir de lumière',
  desc: 'Vous renvoyez 20% des dégâts subis en dégâts purs.',
  unlockRound: 103, maxRound: 200,
  zones: ['est'],
  onHit: (ctx, dmg) => { ctx.monster.hp -= Math.floor(dmg * 0.2); }
},
{
  id: 'angelwings',
  name: 'Ailes angéliques',
  desc: 'Vos coups critiques infligent +200% au lieu de +100%.',
  unlockRound: 103, maxRound: 200,
  zones: ['est'],
  onAttack: (ctx, dmg, type) => {
    if (Math.random()*100 < ctx.player.crit) {
      return Math.floor(dmg * 2);
    }
    return dmg;
  }
},







//ZONE OUEST    5/5
{ 
  id: 'weirdfruit', 
  name: 'Fruit bizarement bizaroïde et étrangement très louche', 
  desc: '???????????', 
  unlockRound: 103, maxRound: 200, 
  zones: ['ouest'], 
  apply: (ctx) => { 
    const bonus = 100000;
    ctx.player.maxHP += bonus; 
    ctx.player.hp += bonus; 
  } 
},
{ 
  id: 'weirdfruit', 
  name: 'Fruit bizaroïde étrange et bizarement très louche', 
  desc: '???????????', 
  unlockRound: 103, maxRound: 200, 
  zones: ['ouest'], 
  apply: (ctx) => {
    const { resSpec, resReal, resGlob, supSpec, supReal, supBrut } = ctx.player;
    ctx.player.resSpec = supSpec;
    ctx.player.resReal = supReal;
    ctx.player.resGlob = supBrut;
    ctx.player.supSpec = resSpec;
    ctx.player.supReal = resReal;
    ctx.player.supBrut = resGlob;
  } 
},
{ 
  id: 'weirdfruit', 
  name: 'Fruit étrange et bizarement très bizaroïde', 
  desc: '???????????', 
  unlockRound: 103, maxRound: 200, 
  zones: ['ouest'], 
  apply: (ctx) => { 
    const bonus = 0.5;
    ctx.player.maxHP *= bonus; 
    ctx.player.hp *= bonus; 
  } 
},
{ 
  id: 'weirdfruit', 
  name: 'Fruit louche et bizaroïde très étrange et bizarre', 
  desc: '???????????', 
  unlockRound: 103, maxRound: 200, 
  zones: ['ouest'], 
  apply: (ctx) => { 
    const bonus = 1.5;
    ctx.player.maxHP *= bonus; 
    ctx.player.hp *= bonus; 
  } 
},
{ 
  id: 'weirdfruit', 
  name: 'Fruit bizarroidement étrange et bizarrement louche', 
  desc: '???????????', 
  unlockRound: 103, maxRound: 200, 
  zones: ['ouest'], 
  apply: (ctx) => { 
    const bonus = 0.75;
    ctx.player.maxHP *= bonus; 
    ctx.player.hp *= bonus; 
  } 
},


    ]