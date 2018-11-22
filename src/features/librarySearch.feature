Feature: Тест поиска на сайте
  Scenario: поиск врача-акушера
    Given Открыта главная страница сайта "/library"
    And   Ввожу значение "акушер" в поле ввода ".clinics__search .search__field_zoom .search__input"
    When  Кликаю на элемент ".button_search[type='submit']"
    Then  Вижу доктора со специальностью "Акушер"