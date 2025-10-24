PROGRAM MovieSearch

Function low(input)
    IF (input is empty) THEN
        RETURN empty string
    ELSE
        RETURN lowercase version of input
    ENDIF
EndFunction

Function getMovies(nameInput)
    Set target to low(nameInput)
    Set results to empty list
    Set i to 0
    WHILE (i < length of MOVIES)
        Set currentMovie to MOVIES[i]
        IF (currentMovie.cast exists) THEN
            Set j to 0
            WHILE (j < length of currentMovie.cast)
                Set person to currentMovie.cast[j]
                IF (low(person.name) equals target) THEN
                    Add currentMovie.title to results
                    BREAK inner loop
                ENDIF
                Set j to j + 1
            ENDWHILE
        ENDIF
        Set i to i + 1
    ENDWHILE
    RETURN results
EndFunction

Function getActors(movieInput)
    Set target to low(movieInput)
    Set i to 0
    WHILE (i < length of MOVIES)
        Set currentMovie to MOVIES[i]
        IF (low(currentMovie.title) equals target) THEN
            Set names to empty list
            Set j to 0
            WHILE (j < length of currentMovie.cast)
                Set person to currentMovie.cast[j]
                Add person.name to names
                Set j to j + 1
            ENDWHILE
            RETURN names
        ENDIF
        Set i to i + 1
    ENDWHILE
    RETURN empty list
EndFunction
END PROGRAM