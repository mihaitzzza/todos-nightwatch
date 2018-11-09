require('nightwatch-cucumber')({
    // cucumberArgs: ['--require', 'features/step_definitions', 'features']
});

module.exports = {
    'output_folder': 'reports',
    'custom_commands_path': '',
    'custom_assertions_path': '',
    'page_objects_path': '',
    'globals_path': './globals.js',
    'selenium': {
        'start_process': false,
        'server_path': '',
        'log_path': '',
        'port': 4444,
        'cli_args': {
            'webdriver.chrome.driver': '',
            'webdriver.gecko.driver': '',
            'webdriver.edge.driver': ''
        }
    },
    'test_settings': {
        'default': {
            'launch_url': 'http://localhost',
            'selenium_port': 4444,
            'selenium_host': 'localhost',
            'silent': true,
            'screenshots': {
                'enabled': false,
                'path': ''
            },
            'globals': {
                'waitForConditionTimeout': 10000
            }
        },
        'chrome': {
            'desiredCapabilities': {
                'browserName': 'chrome'
            }
        }
    }
};
