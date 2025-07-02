let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/sharesubph
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +6 src/lib/utils.ts
badd +206 src/components/Transactions.tsx
badd +10 src/main.tsx
badd +11 ~/sharesubph/src/App.tsx
badd +97 src/components/ui/table.tsx
badd +16 src/components/ThemeSwitcher.tsx
badd +14 tsconfig.json
badd +128 ~/sharesubph/node_modules/.pnpm/@radix-ui+react-select@2.2.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_9be034c75d7b6be68cc4b04bf35a1721/node_modules/@radix-ui/react-select/dist/index.d.mts
argglobal
%argdel
edit src/components/Transactions.tsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 30 + 134) / 268)
exe 'vert 2resize ' . ((&columns * 120 + 134) / 268)
exe 'vert 3resize ' . ((&columns * 116 + 134) / 268)
argglobal
enew
file NvimTree_1
balt src/lib/utils.ts
setlocal foldmethod=manual
setlocal foldexpr=nvim_treesitter#foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal nofoldenable
wincmd w
argglobal
balt ~/sharesubph/node_modules/.pnpm/@radix-ui+react-select@2.2.5_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@_9be034c75d7b6be68cc4b04bf35a1721/node_modules/@radix-ui/react-select/dist/index.d.mts
setlocal foldmethod=expr
setlocal foldexpr=nvim_treesitter#foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
24
sil! normal! zo
24
sil! normal! zc
174
sil! normal! zo
176
sil! normal! zo
177
sil! normal! zo
186
sil! normal! zo
186
sil! normal! zo
196
sil! normal! zo
197
sil! normal! zo
let s:l = 185 - ((184 * winheight(0) + 50) / 100)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 185
normal! 02|
wincmd w
argglobal
if bufexists(fnamemodify("src/components/ui/table.tsx", ":p")) | buffer src/components/ui/table.tsx | else | edit src/components/ui/table.tsx | endif
if &buftype ==# 'terminal'
  silent file src/components/ui/table.tsx
endif
balt src/components/Transactions.tsx
setlocal foldmethod=expr
setlocal foldexpr=nvim_treesitter#foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
5
sil! normal! zo
let s:l = 35 - ((28 * winheight(0) + 50) / 100)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 35
normal! 016|
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 134) / 268)
exe 'vert 2resize ' . ((&columns * 120 + 134) / 268)
exe 'vert 3resize ' . ((&columns * 116 + 134) / 268)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
