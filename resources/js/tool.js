Nova.booting((Vue, router) => {
  Nova.inertia("NovaTranslation", require("./views/LanguagesIndex").default);
  Nova.inertia("NovaTranslation/Languages/Create", require("./views/LanguagesCreate").default);
  Nova.inertia("NovaTranslation/Languages/Translations", require("./views/TranslationsIndex").default);
  Nova.inertia(
    "NovaTranslation/Languages/:language/Translations/Create",
    require("./views/TranslationsCreate").default
  );
});
