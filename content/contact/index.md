+++
title = 'Contact'
date = 2024-02-10T14:50:07+01:00
draft = false
+++

## Nos Coordonnées
<br>
<div class="pl-4 text-lg">
<img class="w-8 inline  align-middle pb-4 "  src="/svg/phone.svg">
<span class="pl-32">06-06-06-06-06</span>
</div>

<div class="pl-4 text-lg">
<img class="w-8 inline  align-middle pb-4 "  src="/svg/mail.svg">
<span class="pl-32">ccc@zzz.yy</span>
</div>
<div class="pl-4 text-lg">
<img class="w-8 inline  align-middle pb-4 "  src="/svg/adresse.svg">
<span class="pl-32">chemin de YY 82 ZZZ</span>
</div>


{{< typo/spaceLine >}}

## Formulaire de contact

<!-- essai tailwind form component -->
<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"   action="https://formspree.io/f/xdoqprgv"
  method="POST">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Votre mail
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
       Votre message
      </label>
      <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="Votre message"></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Envoi
      </button>
    </div>
  </form>
</div>

