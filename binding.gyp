{
    "targets": [
        {
            "target_name": "hashing",
            "sources": [
                "hashing.cc",
                "algorithms/sha256d/sha256d.c",
                "algorithms/sha256d/utils/sph_sha2.c",
                "algorithms/allium/allium.c",
                "algorithms/allium/utils/blake2s.c",
                "algorithms/allium/utils/lyra2.c",
                "algorithms/allium/utils/sponge.c",
                "algorithms/allium/utils/sph_blake.c",
                "algorithms/allium/utils/sph_blake2s.c",
                "algorithms/allium/utils/sph_bmw.c",
                "algorithms/allium/utils/sph_cubehash.c",
                "algorithms/allium/utils/sph_groestl.c",
                "algorithms/allium/utils/sph_keccak.c",
                "algorithms/allium/utils/sph_luffa.c",
                "algorithms/allium/utils/sph_skein.c",
            ],
            "include_dirs": [
                ".",
                "<!(node -e \"require('nan')\")",
            ],
            "cflags_cc": [
                "-std=c++0x",
                "-fPIC",
                "-fexceptions"
            ],
            "defines": [
                "HAVE_DECL_STRNLEN=1",
                "HAVE_BYTESWAP_H=1"
            ],
            "link_settings": {
                "libraries": [
                    "-Wl,-rpath,./build/Release/",
                ]
            },
            'conditions': [
                ['OS=="mac"', {
                    'xcode_settings': {
                        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
                    }
                }]
            ]
        }
    ]
}
