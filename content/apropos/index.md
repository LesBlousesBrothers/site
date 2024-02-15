+++
title = 'À Propos'
date = 2024-02-10T14:49:51+01:00
draft = false
+++
 
## Test d'image tramée
- l'image est tramée
- elle est affichée via un src set
- poids de l'image : 257 ko !!!
- un lien clickable ouvre l'image originelle dans une autre fenêtre

<div class="w-9/12 mx-auto pt-8 pb-2">
{{< images/srcsetInPage src="imagePageTrameResize.jpg" alt="une image tramée cliquable">}}


<a class="underline" href="./imagePage.jpg" target="_blank" >Click pour ouvrir l'image dans une autre page</a>

</div>

## Image tramée sans srcset
- l'image est tramée
- c'est la même image que plus haut
- poids de l'image : 71 ko
<div class="w-9/12 mx-auto pt-8 pb-2">
{{< images/imageNosrcset src="imagePageTrameResize.jpg" alt="image sans srcset" >}}
</div>