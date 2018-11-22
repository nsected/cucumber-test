const ps = require('ps-node');

ps.lookup({
    command: 'chromedriver'
}, function(err, resultList ) {
    if (err) {
        throw new Error( err );
    }
    resultList.forEach(function( process ){
        if( process ){
            ps.kill( process.pid, 'SIGKILL', function( err ) {
                if (err) {
                    throw new Error( err );
                }
                else {
                    console.log( 'chromedriver has been closed');
                    console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
                }
            });
        }
    });
});