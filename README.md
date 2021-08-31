# yard-js-test

Testing documentation for JavaScript files with yard-js

- Run `bundle install` to install the dependencies.
- Run the following code to generate the documentation:
  ```console
  $ bundle show yard-js | xargs -I{} bundle exec yard -e {}/lib/yard-js.rb
  ```
