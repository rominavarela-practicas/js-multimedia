# Speech to Text with JuliusJS
* JuliusJS project: https://github.com/zzmp/juliusjs

Requires:
* **To run in a web server** AKA at least in localhost
* Web Workers http://caniuse.com/#search=web%20workers
* Web Audio API http://caniuse.com/#search=audio%20api

## Background
"Julius" is a high-performance, two-pass large vocabulary continuous speech recognition (LVCSR)
decoder software for speech-related researchers and developers.

* http://julius.osdn.jp/en_index.php
* http://julius.osdn.jp/juliusbook/en/

## Compile you own vocabulary
In Julius, a recognition grammar is separated into two files:

 1. The ".voca" file which defines each word pronunciation. This information comes from an Acoutic Model that contains a statistical representation of each distinct sound that makes up a spoken word.

 2. The ".grammar" file which defines the Grammar that the Speech Recognition Engine (SRE) can expect as input.

Both the .grammar and .voca files should be compiled into ".dfa"  and ".dict" files so that Julius can use them.

The VoxForge-project is working on the creation of an open-source acoustic model for the English language in Julius.

### A. Setup

     1. Download Julius
 
     http://julius.osdn.jp/en_index.php?q=index-en.html#download_julius
     
     Add /bin into you operating system Path
     
     Test with the command
     
     > mkfa
     
     
     
     2. Download Julia
     
     http://julialang.org/downloads/platform.html
     
     Add /bin into you operating system Path
     
     Test with the command
     
     > julia --version
     
     
     
     3. Download HTK
     
     http://htk.eng.cam.ac.uk/register.shtml
     
     http://htk.eng.cam.ac.uk/ftp/software/htk-3.3-windows-binary.zip
     
     Add /htk into you operating system Path
     
     Test with the command
     
     > HVite
     
     
     
     4. Download VoxForge julia script 
     
     https://raw.githubusercontent.com/VoxForge/develop/master/bin/mkdfa.jl
     
     put it together in juliusjs voxforge directory

* http://www.voxforge.org/home/dev/acousticmodels/windows/create/htkjulius/tutorial/download

### B. Compilation procedure

      To compile yout <filename>.grammar and <filename>.voca
      
      In the juliusjs voxforge directory, use the command:
      
      > julia mkdfa.jl <filename>

* http://www.voxforge.org/home/dev/acousticmodels/linux/create/htkjulius/tutorial/data-prep/step-1

