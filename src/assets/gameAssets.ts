const asset = (fileName: string) => `${import.meta.env.BASE_URL || '/'}assets/${fileName}`;

export const ASSETS = {
  mapBg: asset('map_bg.jpg'),
  scenes: {
    forest: asset('bg_forest.jpg'),
    arena: asset('bg_arena.jpg'),
    lac: asset('bg_lac_palace.jpg'),
    swayamvara: asset('bg_swayamvara.jpg'),
    khandava: asset('bg_khandava.jpg'),
    dice: asset('bg_dice_hall.jpg'),
    exile: asset('bg_exile.jpg'),
    matsya: asset('bg_matsya.jpg'),
    dwarka: asset('bg_dwarka.jpg'),
    kurukshetra: asset('bg_kurukshetra.jpg'),
  },
  characters: {
    pandu: asset('pandu.png'),
    karna: asset('karna.png'),
    bhima: asset('bhima.png'),
    arjuna: asset('arjuna.png'),
    yudhishthira: asset('yudhishthira.png'),
    shakuni: asset('shakuni.png'),
    draupadi: asset('draupadi.png'),
    krishna: asset('krishna.png'),
    drona: asset('drona.png'),
    duryodhana: asset('duryodhana.png'),
  }
};
