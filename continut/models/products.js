/**
 * Product Models for SmartChoice Application
 * This file contains sample product data for demonstration purposes
 */

const productModels = {
  // Smartphones
  smartphones: [
    {
      id: "iphone-14-pro",
      name: "iPhone 14 Pro",
      category: "Smartphone",
      brand: "Apple",
      stores: {
        darwin: {
          price: 3999,
          inStock: true,
          url: "https://darwin.md/iphone-14-pro"
        },
        orange: {
          price: 4199,
          inStock: true,
          url: "https://orange.md/iphone-14-pro"
        },
        enter: {
          price: 3899,
          inStock: false,
          url: "https://enter.md/iphone-14-pro"
        },
        maximum: {
          price: 39999,
          inStock: true,
          url: "https://maximum.md/iphone-14-pro"
        },
        ultra: {
          price: 38999,
          inStock: true,
          url: "https://ultra.md/iphone-14-pro"
        },
        bomba: {
          price: 37999,
          inStock: false,
          url: "https://bomba.md/iphone-14-pro"
        }
      },
      specs: {
        screen: "6.1 inch Super Retina XDR",
        processor: "A16 Bionic",
        ram: "6GB",
        storage: "128GB",
        camera: "48MP + 12MP + 12MP",
        battery: "3200mAh"
      }
    },
    {
      id: "samsung-s23-ultra",
      name: "Samsung Galaxy S23 Ultra",
      category: "Smartphone",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 4499,
          inStock: true,
          url: "https://darwin.md/samsung-s23-ultra"
        },
        orange: {
          price: 4599,
          inStock: true,
          url: "https://orange.md/samsung-s23-ultra"
        },
        enter: {
          price: 4399,
          inStock: true,
          url: "https://enter.md/samsung-s23-ultra"
        },
        maximum: {
          price: 35999,
          inStock: true,
          url: "https://maximum.md/samsung-s23-ultra"
        },
        ultra: {
          price: 34999,
          inStock: true,
          url: "https://ultra.md/samsung-s23-ultra"
        },
        bomba: {
          price: 33999,
          inStock: true,
          url: "https://bomba.md/samsung-s23-ultra"
        }
      },
      specs: {
        screen: "6.8 inch Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        camera: "200MP + 12MP + 10MP + 10MP",
        battery: "5000mAh"
      }
    },
    {
      id: "xiaomi-13-pro",
      name: "Xiaomi 13 Pro",
      category: "Smartphone",
      brand: "Xiaomi",
      stores: {
        darwin: {
          price: 3299,
          inStock: true,
          url: "https://darwin.md/xiaomi-13-pro"
        },
        orange: {
          price: 3399,
          inStock: false,
          url: "https://orange.md/xiaomi-13-pro"
        },
        enter: {
          price: 3199,
          inStock: true,
          url: "https://enter.md/xiaomi-13-pro"
        }
      },
      specs: {
        screen: "6.73 inch AMOLED",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        camera: "50MP + 50MP + 50MP"
      }
    }
  ],

  // Laptops
  laptops: [
    {
      id: "macbook-pro-14",
      name: "MacBook Pro 14",
      category: "Laptop",
      brand: "Apple",
      stores: {
        darwin: {
          price: 12999,
          inStock: true,
          url: "https://darwin.md/macbook-pro-14"
        },
        orange: {
          price: 13299,
          inStock: true,
          url: "https://orange.md/macbook-pro-14"
        },
        enter: {
          price: 12899,
          inStock: false,
          url: "https://enter.md/macbook-pro-14"
        },
        maximum: {
          price: 49999,
          inStock: true,
          url: "https://maximum.md/macbook-pro-14"
        },
        ultra: {
          price: 48999,
          inStock: true,
          url: "https://ultra.md/macbook-pro-14"
        },
        bomba: {
          price: 47999,
          inStock: false,
          url: "https://bomba.md/macbook-pro-14"
        }
      },
      specs: {
        screen: "14.2 inch Liquid Retina XDR",
        processor: "M2 Pro",
        ram: "16GB",
        storage: "512GB",
        gpu: "Integrated",
        battery: "70Wh"
      }
    },
    {
      id: "dell-xps-15",
      name: "Dell XPS 15",
      category: "Laptop",
      brand: "Dell",
      stores: {
        darwin: {
          price: 9999,
          inStock: true,
          url: "https://darwin.md/dell-xps-15"
        },
        orange: {
          price: 10299,
          inStock: true,
          url: "https://orange.md/dell-xps-15"
        },
        enter: {
          price: 9899,
          inStock: true,
          url: "https://enter.md/dell-xps-15"
        },
        maximum: {
          price: 45999,
          inStock: true,
          url: "https://maximum.md/dell-xps-15"
        },
        ultra: {
          price: 44999,
          inStock: true,
          url: "https://ultra.md/dell-xps-15"
        },
        bomba: {
          price: 43999,
          inStock: true,
          url: "https://bomba.md/dell-xps-15"
        }
      },
      specs: {
        screen: "15.6 inch 4K OLED",
        processor: "Intel Core i9-12900H",
        ram: "32GB",
        storage: "1TB",
        gpu: "NVIDIA RTX 3050 Ti",
        battery: "86Wh"
      }
    },
    {
      id: "lenovo-thinkpad-x1",
      name: "Lenovo ThinkPad X1 Carbon",
      category: "Laptop",
      brand: "Lenovo",
      stores: {
        darwin: {
          price: 8999,
          inStock: true,
          url: "https://darwin.md/thinkpad-x1"
        },
        orange: {
          price: 9199,
          inStock: false,
          url: "https://orange.md/thinkpad-x1"
        },
        enter: {
          price: 8899,
          inStock: true,
          url: "https://enter.md/thinkpad-x1"
        }
      },
      specs: {
        screen: "14 inch WQXGA",
        processor: "Intel Core i7-1260P",
        ram: "16GB",
        storage: "512GB",
        gpu: "Intel Iris Xe"
      }
    }
  ],

  // TVs
  tvs: [
    {
      id: "lg-c2-65",
      name: "LG C2 65\" OLED TV",
      category: "TV",
      brand: "LG",
      stores: {
        darwin: {
          price: 8999,
          inStock: true,
          url: "https://darwin.md/lg-c2-65"
        },
        orange: {
          price: 9199,
          inStock: true,
          url: "https://orange.md/lg-c2-65"
        },
        enter: {
          price: 8899,
          inStock: false,
          url: "https://enter.md/lg-c2-65"
        },
        maximum: {
          price: 32999,
          inStock: true,
          url: "https://maximum.md/lg-c2"
        },
        ultra: {
          price: 31999,
          inStock: true,
          url: "https://ultra.md/lg-c2"
        },
        bomba: {
          price: 30999,
          inStock: true,
          url: "https://bomba.md/lg-c2"
        }
      },
      specs: {
        screen: "65 inch OLED",
        resolution: "4K (3840 x 2160)",
        hdr: "Dolby Vision, HDR10",
        processor: "α9 Gen 5 AI",
        ports: "4 HDMI 2.1, 3 USB",
        smart: "webOS"
      }
    },
    {
      id: "samsung-qn90b-55",
      name: "Samsung QN90B 55\" Neo QLED",
      category: "TV",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 5999,
          inStock: true,
          url: "https://darwin.md/samsung-qn90b-55"
        },
        orange: {
          price: 6199,
          inStock: true,
          url: "https://orange.md/samsung-qn90b-55"
        },
        enter: {
          price: 5899,
          inStock: true,
          url: "https://enter.md/samsung-qn90b-55"
        },
        maximum: {
          price: 29999,
          inStock: true,
          url: "https://maximum.md/samsung-qn90b"
        },
        ultra: {
          price: 28999,
          inStock: true,
          url: "https://ultra.md/samsung-qn90b"
        },
        bomba: {
          price: 27999,
          inStock: false,
          url: "https://bomba.md/samsung-qn90b"
        }
      },
      specs: {
        screen: "55 inch Neo QLED",
        resolution: "4K (3840 x 2160)",
        hdr: "HDR10+",
        processor: "Neo Quantum Processor 4K",
        ports: "4 HDMI, 2 USB",
        smart: "Tizen OS"
      }
    },
    {
      id: "sony-x95k-75",
      name: "Sony X95K 75\" BRAVIA XR",
      category: "TV",
      brand: "Sony",
      stores: {
        darwin: {
          price: 12999,
          inStock: true,
          url: "https://darwin.md/sony-x95k-75"
        },
        orange: {
          price: 13299,
          inStock: false,
          url: "https://orange.md/sony-x95k-75"
        },
        enter: {
          price: 12899,
          inStock: true,
          url: "https://enter.md/sony-x95k-75"
        }
      },
      specs: {
        screen: "75 inch Full Array LED",
        resolution: "4K (3840 x 2160)",
        hdr: "Dolby Vision, HDR10",
        processor: "Cognitive Processor XR",
        ports: "4 HDMI 2.1, 2 USB"
      }
    }
  ],

  // Refrigerators
  refrigerators: [
    {
      id: "samsung-rf28t5001sr",
      name: "Samsung RF28T5001SR French Door Refrigerator",
      category: "Refrigerator",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 4999,
          inStock: true,
          url: "https://darwin.md/samsung-rf28t5001sr"
        },
        orange: {
          price: 5199,
          inStock: true,
          url: "https://orange.md/samsung-rf28t5001sr"
        },
        enter: {
          price: 4899,
          inStock: true,
          url: "https://enter.md/samsung-rf28t5001sr"
        },
        maximum: {
          price: 19999,
          inStock: true,
          url: "https://maximum.md/samsung-rf28t5001sr"
        },
        ultra: {
          price: 18999,
          inStock: true,
          url: "https://ultra.md/samsung-rf28t5001sr"
        },
        bomba: {
          price: 17999,
          inStock: true,
          url: "https://bomba.md/samsung-rf28t5001sr"
        }
      },
      specs: {
        capacity: "28 cu. ft.",
        type: "French Door",
        color: "Stainless Steel",
        features: "LED Lighting, Water Dispenser, Ice Maker",
        energyRating: "A+",
        energy: "Energy Star Certified"
      }
    },
    {
      id: "lg-lfxcs27526s",
      name: "LG LFXCS27526S French Door Refrigerator",
      category: "Refrigerator",
      brand: "LG",
      stores: {
        darwin: {
          price: 4599,
          inStock: true,
          url: "https://darwin.md/lg-lfxcs27526s"
        },
        orange: {
          price: 4799,
          inStock: false,
          url: "https://orange.md/lg-lfxcs27526s"
        },
        enter: {
          price: 4499,
          inStock: true,
          url: "https://enter.md/lg-lfxcs27526s"
        },
        maximum: {
          price: 21999,
          inStock: true,
          url: "https://maximum.md/lg-lfxs28966s"
        },
        ultra: {
          price: 20999,
          inStock: true,
          url: "https://ultra.md/lg-lfxs28966s"
        },
        bomba: {
          price: 19999,
          inStock: false,
          url: "https://bomba.md/lg-lfxs28966s"
        }
      },
      specs: {
        capacity: "27 cu. ft.",
        type: "French Door",
        color: "Stainless Steel",
        features: "LED Lighting, Water Dispenser, Ice Maker, Door-in-Door",
        energyRating: "A++",
        energy: "Energy Star Certified"
      }
    },
    {
      id: "whirlpool-wrs588fihz",
      name: "Whirlpool WRS588FIHZ French Door Refrigerator",
      category: "Refrigerator",
      brand: "Whirlpool",
      stores: {
        darwin: {
          price: 3999,
          inStock: true,
          url: "https://darwin.md/whirlpool-wrs588fihz"
        },
        orange: {
          price: 4199,
          inStock: true,
          url: "https://orange.md/whirlpool-wrs588fihz"
        },
        enter: {
          price: 3899,
          inStock: true,
          url: "https://enter.md/whirlpool-wrs588fihz"
        }
      },
      specs: {
        capacity: "25 cu. ft.",
        type: "French Door",
        color: "Stainless Steel",
        features: "LED Lighting, Water Dispenser, Ice Maker, Adaptive Defrost",
        energyRating: "A+"
      }
    }
  ],

  // Washing Machines
  washingMachines: [
    {
      id: "samsung-wf45r6100ac",
      name: "Samsung WF45R6100AC Front Load Washer",
      category: "Washing Machine",
      brand: "Samsung",
      stores: {
        darwin: {
          price: 2999,
          inStock: true,
          url: "https://darwin.md/samsung-wf45r6100ac"
        },
        orange: {
          price: 3199,
          inStock: true,
          url: "https://orange.md/samsung-wf45r6100ac"
        },
        enter: {
          price: 2899,
          inStock: true,
          url: "https://enter.md/samsung-wf45r6100ac"
        },
        maximum: {
          price: 8999,
          inStock: true,
          url: "https://maximum.md/samsung-wf45t6000aw"
        },
        ultra: {
          price: 8799,
          inStock: true,
          url: "https://ultra.md/samsung-wf45t6000aw"
        },
        bomba: {
          price: 8599,
          inStock: true,
          url: "https://bomba.md/samsung-wf45t6000aw"
        }
      },
      specs: {
        capacity: "4.5 cu. ft.",
        type: "Front Load",
        color: "White",
        features: "Steam Wash, Super Speed, AddWash Door",
        energyRating: "A+++",
        cycles: "12 wash cycles"
      }
    },
    {
      id: "lg-wm3900hwa",
      name: "LG WM3900HWA Front Load Washer",
      category: "Washing Machine",
      brand: "LG",
      stores: {
        darwin: {
          price: 3299,
          inStock: true,
          url: "https://darwin.md/lg-wm3900hwa"
        },
        orange: {
          price: 3499,
          inStock: false,
          url: "https://orange.md/lg-wm3900hwa"
        },
        enter: {
          price: 3199,
          inStock: true,
          url: "https://enter.md/lg-wm3900hwa"
        },
        maximum: {
          price: 9999,
          inStock: true,
          url: "https://maximum.md/lg-wm3900hwa"
        },
        ultra: {
          price: 9799,
          inStock: true,
          url: "https://ultra.md/lg-wm3900hwa"
        },
        bomba: {
          price: 9599,
          inStock: false,
          url: "https://bomba.md/lg-wm3900hwa"
        }
      },
      specs: {
        capacity: "4.5 cu. ft.",
        type: "Front Load",
        color: "Graphite Steel",
        features: "Steam, TurboWash 360, WiFi Enabled",
        energyRating: "A+++",
        cycles: "14 wash cycles"
      }
    },
    {
      id: "whirlpool-wfw5620hw",
      name: "Whirlpool WFW5620HW Front Load Washer",
      category: "Washing Machine",
      brand: "Whirlpool",
      stores: {
        darwin: {
          price: 2499,
          inStock: true,
          url: "https://darwin.md/whirlpool-wfw5620hw"
        },
        orange: {
          price: 2699,
          inStock: true,
          url: "https://orange.md/whirlpool-wfw5620hw"
        },
        enter: {
          price: 2399,
          inStock: true,
          url: "https://enter.md/whirlpool-wfw5620hw"
        }
      },
      specs: {
        capacity: "4.3 cu. ft.",
        type: "Front Load",
        color: "White",
        features: "Preset Cycles, Adaptive Dispensing",
        energyRating: "A++"
      }
    }
  ]
};

// Export the product models
module.exports = productModels; 
