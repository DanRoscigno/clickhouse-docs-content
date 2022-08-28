"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28056],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33049:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={slug:"/en/development/integrating_rust_libraries"},s="Integrating Rust libraries",u={unversionedId:"en/development/integrating_rust_libraries",id:"en/development/integrating_rust_libraries",title:"Integrating Rust libraries",description:"Rust library integration will be described based on BLAKE3 hash-function integration.",source:"@site/docs/en/development/integrating_rust_libraries.md",sourceDirName:"en/development",slug:"/en/development/integrating_rust_libraries",permalink:"/docs/en/development/integrating_rust_libraries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/integrating_rust_libraries.md",tags:[],version:"current",frontMatter:{slug:"/en/development/integrating_rust_libraries"},sidebar:"english",previous:{title:"Source Code Browser",permalink:"/docs/en/development/browse-code"},next:{title:"Native protocol",permalink:"/docs/en/native-protocol"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-rust-libraries"},"Integrating Rust libraries"),(0,o.kt)("p",null,"Rust library integration will be described based on BLAKE3 hash-function integration."),(0,o.kt)("p",null,"The first step is forking a library and making necessary changes for Rust and C/C++ compatibility."),(0,o.kt)("p",null,"After forking library repository you need to change target settings in Cargo.toml file. Firstly, you need to switch build to static library. Secondly, you need to add cbindgen crate to the crate list. We will use it later to generate C-header automatically."),(0,o.kt)("p",null,"The next step is creating or editing the build.rs script for your library - and enable cbindgen to generate the header during library build. These lines were added to BLAKE3 build script for the same purpose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();\n\n    let package_name = env::var("CARGO_PKG_NAME").unwrap();\n    let output_file = ("include/".to_owned() + &format!("{}.h", package_name)).to_string();\n\n    match cbindgen::generate(&crate_dir) {\n        Ok(header) => {\n            header.write_to_file(&output_file);\n        }\n        Err(err) => {\n            panic!("{}", err)\n        }\n    }\n')),(0,o.kt)("p",null,"As you can see, script sets the output directory and launches header generation."),(0,o.kt)("p",null,"The next step is to add CMake files into library directory, so it can build with other submodules. As you can see, BLAKE3 main directory contains two CMake files - CMakeLists.txt and build_rust_lib.cmake. The second one is a function, which calls cargo build and sets all needed paths for library build. You should copy it to your library and then you can adjust cargo flags and other settings for you library needs."),(0,o.kt)("p",null,"When finished with CMake configuration, you should move on to create a C/C++ compatible API for your library. Let us see BLAKE3's method blake3_apply_shim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#[no_mangle]\npub unsafe extern "C" fn blake3_apply_shim(\n    begin: *const c_char,\n    _size: u32,\n    out_char_data: *mut u8,\n) -> *mut c_char {\n    if begin.is_null() {\n        let err_str = CString::new("input was a null pointer").unwrap();\n        return err_str.into_raw();\n    }\n    let mut hasher = Hasher::new();\n    let input_bytes = CStr::from_ptr(begin);\n    let input_res = input_bytes.to_bytes();\n    hasher.update(input_res);\n    let mut reader = hasher.finalize_xof();\n    reader.fill(std::slice::from_raw_parts_mut(out_char_data, OUT_LEN));\n    std::ptr::null_mut()\n}\n')),(0,o.kt)("p",null,"This method gets C-compatible string, its size and output string pointer as input. Then, it converts C-compatible inputs into types that are used by actual library methods and calls them. After that, it should convert library methods' outputs back into C-compatible type. In that particular case library supported direct writing into pointer by method fill(), so the conversion was not needed. The main advice here is to create less methods, so you will need to do less conversions on each method call and won't create much overhead."),(0,o.kt)("p",null,"Also, you should use attribute #","[no_mangle]"," and ",(0,o.kt)("inlineCode",{parentName:"p"},'extern "C"')," for every C-compatible attribute. Without it library can compile incorrectly and cbindgen won't launch header autogeneration."),(0,o.kt)("p",null,"After all these steps you can test your library in a small project to find all problems with compatibility or header generation. If any problems occur during header generation, you can try to configure it with cbindgen.toml file (you can find an example of it in BLAKE3 directory or a template here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eqrion/cbindgen/blob/master/template.toml"},"https://github.com/eqrion/cbindgen/blob/master/template.toml"),"). If everything works correctly, you can finally integrate its methods into ClickHouse."),(0,o.kt)("p",null,"In addition, some problems with integration are worth noting here:\n1) Some architectures may require special cargo flags or build.rs configurations, so you may want to test cross-compilation for different platforms first.\n2) MemorySanitizer can cause false-positive reports as it's unable to see if some variables in Rust are initialized or not. It was solved with writing a method with more explicit definition for some variables, although this implementation of method is slower and is used only to fix MemorySanitizer builds."))}m.isMDXComponent=!0}}]);