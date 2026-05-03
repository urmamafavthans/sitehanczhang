const SITE_DATA = {
  mainAssets: [
    {
      type: "image",
      src: "assets/images/main/hc_cop_photo_01.webp",
      label: "HC-COP / PHOTO 01",
      project: "cop",
      category: ["research", "exhibition"],
      format: ["moving-image", "installation"],
      asset: ["photo"]
    },
    {
  type: "image",
  src: "assets/images/main/hc_cop_photo_02.webp",
  label: "HC-COP / PHOTO 02",
  project: "cop",
  category: ["research", "exhibition"],
  format: ["moving-image", "installation"],
  asset: ["photo"]
},
    {
      type: "video",
      src: "assets/videos/main/hc_cop_video_01.mp4",
      poster: "assets/posters/hc_cop_video_01_poster.webp",
      label: "HC-COP / VIDEO 01",
      project: "cop",
      category: ["research", "exhibition"],
      format: ["moving-image", "installation"],
      asset: ["recording"]
    },
    {
      type: "image",
      src: "assets/images/main/hc_lt_rendering_01.webp",
      label: "HC-LT / RENDERING 01",
      project: "lt",
      category: ["research", "object"],
      format: ["installation", "sound"],
      asset: ["rendering"]
    },
    {
      type: "image",
      src: "assets/images/main/hc_lt_archive_01.webp",
      label: "HC-LT / ARCHIVE 01",
      project: "lt",
      category: ["research", "object"],
      format: ["installation", "sound"],
      asset: ["archive"]
    },
    {
      type: "image",
      src: "assets/images/main/hc_lr_photo_01.webp",
      label: "HC-LR / PHOTO 01",
      project: "lr",
      category: ["research", "exhibition"],
      format: ["installation", "sound"],
      asset: ["photo"]
    },
    {
      type: "video",
      src: "assets/videos/main/hc_lr_video_01.mp4",
      poster: "assets/posters/hc_lr_video_01_poster.webp",
      label: "HC-LR / VIDEO 01",
      project: "lr",
      category: ["research", "exhibition"],
      format: ["installation", "sound"],
      asset: ["recording"]
    },
    {
      type: "video",
      src: "assets/videos/main/hc_oct_video_01.mp4",
      poster: "assets/posters/hc_oct_video_01_poster.webp",
      label: "HC-OCT / VIDEO 01",
      project: "oct",
      category: ["research"],
      format: ["moving-image", "sound"],
      asset: ["recording"]
    },
    {
      type: "image",
      src: "assets/images/main/hc_sa_photo_01.webp",
      label: "HC-SA / PHOTO 01",
      project: "sa",
      category: ["research", "object"],
      format: ["installation"],
      asset: ["photo"]
    },
    {
      type: "image",
      src: "assets/images/main/hc_sa_archive_01.webp",
      label: "HC-SA / ARCHIVE 01",
      project: "sa",
      category: ["research", "object"],
      format: ["installation"],
      asset: ["archive"]
    },
    {
      type: "image",
      src: "assets/images/main/hc_cop_archive_01.webp",
      label: "HC-COP / ARCHIVE 01",
      project: "cop",
      category: ["research"],
      format: ["installation"],
      asset: ["archive"]
    }
  ],

  projects: {
    cop: {
      code: "HC-COP",
      title: "Cloud of Polyphony",

      metadata: {
        project: "Cloud of Polyphony",
        category: "Research, Exhibition",
        location: "Eindhoven, Amsterdam, Bratislava, Rotterdam, Madrid",
        year: "2024",
        format: "Installation, Moving image",
        assetTypes: "Photo, Rendering, Text, Note"
      },

      filter: {
        category: ["research", "exhibition"],
        format: ["moving-image", "installation"],
        asset: ["photo", "rendering", "text", "note", "archive", "recording"]
      },

      description: `
Guizhou, a mountainous region in Southwest China, has undergone significant terraforming processes and infrastructural development over the past decade to establish itself as a Big Data Hub, not without ethical and ecological costs.

Cloud of Polyphony is a multimedia installation featuring a parabolic projection wall shaped like a data receiver that displays documentary footage of the aftermath of the first Big Data Expo in 2013. The 5G cell tower has been inverted and reappropriated, shifting it from a device that captures and collects data into a speaker. Utilising a Lidar sensor to gather proximity data from visitors, it generates an unfolding soundscape based on onsite recordings in Guizhou, ranging from conversations in the local dialect to crumbling rocks, turbines, and electronic noise.

Through this multi-threaded narrative exploring the political and cultural dimensions of the data industry, Cloud of Polyphony highlights the material conditions associated with the ostensibly poetic concept of ‘the cloud’.
`,

            media: [
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_01.webp",
          label: "HC-COP / PHOTO 01"
        },
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_02.webp",
          label: "HC-COP / PHOTO 02"
        },
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_03.webp",
          label: "HC-COP / PHOTO 03"
        },
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_04.webp",
          label: "HC-COP / PHOTO 04"
        },
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_05.webp",
          label: "HC-COP / PHOTO 05"
        },
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_06.webp",
          label: "HC-COP / PHOTO 06"
        },
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_07.webp",
          label: "HC-COP / PHOTO 07"
        },
        {
          type: "image",
          src: "assets/images/projects/cop/hc_cop_photo_08.webp",
          label: "HC-COP / PHOTO 08"
        }
      ]
    },

    lr: {
      code: "HC-LR",
      title: "Liminal Reverberation",

      metadata: {
        project: "Liminal Reverberation",
        category: "Research, Exhibition",
        location: "Eindhoven, Amsterdam",
        year: "2025",
        format: "Installation, Sound",
        assetTypes: "Photo, Rendering, Recording, Note, Archive"
      },

      filter: {
        category: ["research", "exhibition"],
        format: ["installation", "sound"],
        asset: ["photo", "rendering", "recording", "note", "archive"]
      },

      description: `
Liminal Reverberation investigates the materially intensive yet routinely obscured infrastructure of the digital “cloud” through an acoustic register. Conceived as an interactive installation that borrows the emblematic form of a warning siren, the work repurposes a device historically tied to command and control into a participatory listening interface. Real-time spatial mapping via lidar sensors generates continuously shifting sound fields that are triggered and modulated by the presence and movement of visitors. The resulting compositions braid server noise, site-specific field recordings from Middenmeer, spoken testimony, and algorithmic synthesis into a layered sonic environment.

By rendering audible the territorial and ecological footprint of data infrastructure, the installation foregrounds the otherwise abstract entanglements between computation, land use, and public memory. Situated at the intersection of sound design, critical infrastructure studies, and participatory fieldwork, the project fosters modes of civic listening and environmental attentiveness. Recentring the notion of “warning” not as a unidirectional alarm but as a situated call to attunement, the work counters extractive logics with an acoustic practice of resistance and critique.
`,

      media: [
        {
          type: "image",
          src: "assets/images/projects/hc_lr_photo_01.webp",
          label: "HC-LR / PHOTO 01"
        },
        {
          type: "video",
          src: "assets/videos/projects/hc_lr_video_01.mp4",
          poster: "assets/posters/hc_lr_video_01_poster.webp",
          label: "HC-LR / VIDEO 01"
        }
      ]
    },

    lt: {
      code: "HC-LT",
      title: "Landscape Transfer",

      metadata: {
        project: "Landscape Transfer",
        category: "Research, Exhibition",
        location: "Eindhoven",
        year: "2023",
        format: "Installation, Moving image",
        assetTypes: "Photo, Rendering, Note, Archive"
      },

      filter: {
        category: ["research", "exhibition"],
        format: ["installation", "moving-image"],
        asset: ["photo", "rendering", "note", "archive"]
      },

      description: `
Landscape Transfer is an ongoing research project investigating the transformative effects of data transmission on topography. Integrating multimedia components such as video, animation, and material experiments, the project explores how data archiving behaviors drive mineral extraction and reshape landscapes in both physical and virtual dimensions.

By examining the intersection of human activities, technological systems, and environmental change, Landscape Transfer critically reflects on the intricate relationship between information technologies and the landscapes they alter. Through its multidimensional approach, the project seeks to illuminate the ecological and geopolitical implications of data-driven transformations.
`,

      media: [
        {
          type: "image",
          src: "assets/images/projects/hc_lt_rendering_01.webp",
          label: "HC-LT / RENDERING 01"
        },
        {
          type: "image",
          src: "assets/images/projects/hc_lt_archive_01.webp",
          label: "HC-LT / ARCHIVE 01"
        }
      ]
    },

    oct: {
      code: "HC-OCT",
      title: "Octopus",

      metadata: {
        project: "Octopus",
        category: "Research",
        location: "Eindhoven, Milan",
        year: "2022",
        format: "Moving image, Sound",
        assetTypes: "Photo, Recording, Note"
      },

      filter: {
        category: ["research"],
        format: ["moving-image", "sound"],
        asset: ["photo", "recording", "note"]
      },

      description: `
The film stems from a specific feature of the octopus: its skin animation pattern. The octopus activates it in situations such as defence, courtship and hunting, supposedly from a body with a decentralised activity which is able to create an autonomous loop of actions. This is an experimental attempt to explore our own agency within an environment that is not so dissimilar to the octopus’s seabed habitat.
`,

      media: [
        {
          type: "video",
          src: "assets/videos/projects/hc_oct_video_01.mp4",
          poster: "assets/posters/hc_oct_video_01_poster.webp",
          label: "HC-OCT / VIDEO 01"
        }
      ]
    },

    sa: {
      code: "HC-SA",
      title: "Solar Atlas",

      metadata: {
        project: "Solar Atlas",
        category: "Research, Product",
        location: "Lessac",
        year: "2023",
        format: "Installation",
        assetTypes: "Photo, Note"
      },

      filter: {
        category: ["research", "object"],
        format: ["installation"],
        asset: ["photo", "note"]
      },

      description: `
Solar Atlas examines the infrastructures that transform sunlight into electricity, data, and systems of governance. Moving beyond the image of solar energy as clean and immaterial, the project traces how solar infrastructures reorganise land, supply chains, and ecological responsibility across uneven relations between the Global North and South.

Inspired by the Campbell-Stokes sunshine recorder, which registered sunlight by burning marks onto paper, the installation reappropriates this historical measuring device as a drawing apparatus. A solar-powered rotational engine carries a charcoal tip across a paper surface, allowing onsite sunshine hours to determine the rhythm, density, and duration of the mark.

Through this slowly shifting inscription, Solar Atlas reveals solar energy as a volatile resource shaped by weather, extraction, and geopolitical control. The charcoal trace becomes both measurement and residue, recording the promise of renewable energy while pointing to the obscured material costs behind its conversion into power.
`,

      media: [
        {
          type: "image",
          src: "assets/images/projects/hc_sa_photo_01.webp",
          label: "HC-SA / PHOTO 01"
        },
        {
          type: "image",
          src: "assets/images/projects/hc_sa_archive_01.webp",
          label: "HC-SA / ARCHIVE 01"
        }
      ]
    }
  }
};